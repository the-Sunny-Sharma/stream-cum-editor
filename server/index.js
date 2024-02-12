const express = require("express");
const cors = require("cors");
const { getToken } = require("./zegoServerAssistant");
const { generateToken04 } = require("./zegoServerAssistant");

const app = express();
app.use(cors());
app.use(express.json());

const bodyP = require("body-parser");
const compiler = require("compilex");
const options = { stats: true };
compiler.init(options);
app.use(bodyP.json());
app.use(
  "/codemirror-5.65.9",
  express.static("E:/websitesallprojects/CodeEditor/Compiler/codemirror-5.65.9")
);
app.get("/", function (req, res) {
  compiler.flush(function () {
    console.log("deleted");
  });
  res.sendFile("E:/websitesallprojects/CodeEditor/Compiler/index.html");
});

// Endpoint to generate token
app.get("/getToken/access_token", (req, res) => {
  const appID = 2137113653;
  const secret = "93546ef2e39a01618620284c0d02bf35";
  const effectiveTimeInSeconds = 7200;
  const payload = "";
  // Get parameters from request if needed
  let userID = req.body.userID;

  try {
    const token = generateToken04(
      appID,
      userID,
      secret,
      effectiveTimeInSeconds,
      payload
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Compiler code
app.post("/compile", function (req, res) {
  var code = req.body.code;
  var input = req.body.input;
  var lang = req.body.lang;
  try {
    if (lang == "Cpp") {
      if (!input) {
        var envData = {
          OS: "windows",
          cmd: "g++",
          options: { timeout: 10000 },
        }; // (uses g++ command to compile )
        compiler.compileCPP(envData, code, function (data) {
          if (data.output) {
            res.send(data);
          } else {
            res.send({ output: "error" });
          }
        });
      } else {
        var envData = {
          OS: "windows",
          cmd: "g++",
          options: { timeout: 10000 },
        }; // (uses g++ command to compile )
        compiler.compileCPPWithInput(envData, code, input, function (data) {
          if (data.output) {
            res.send(data);
          } else {
            res.send({ output: "error" });
          }
        });
      }
    } else if (lang == "Java") {
      if (!input) {
        var envData = { OS: "windows" };
        compiler.compileJava(envData, code, function (data) {
          if (data.output) {
            res.send(data);
          } else {
            res.send({ output: "error" });
          }
        });
      } else {
        //if windows
        var envData = { OS: "windows" };
        //else
        compiler.compileJavaWithInput(envData, code, input, function (data) {
          if (data.output) {
            res.send(data);
          } else {
            res.send({ output: "error" });
          }
        });
      }
    } else if (lang == "Python") {
      if (!input) {
        var envData = { OS: "windows" };
        compiler.compilePython(envData, code, function (data) {
          if (data.output) {
            res.send(data);
          } else {
            res.send({ output: "error" });
          }
        });
      } else {
        var envData = { OS: "windows" };
        compiler.compilePythonWithInput(envData, code, input, function (data) {
          if (data.output) {
            res.send(data);
          } else {
            res.send({ output: "error" });
          }
        });
      }
    }
  } catch (e) {
    console.log("error");
  }
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
