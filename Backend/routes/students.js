const router = require("express").Router();
let Student = require("../models/student");

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const gender = req.body.gender;

  //create new object for student model
  const newStudent = new Student({
    name,
    age,
    gender,
  });

  //Meka javascript promise ekak then eken wenne success unoth "Student added" kiyala message ekak enawa
  newStudent
    .save()
    .then(() => {
      res.json("Student Added");
    })
    .catch((err) => {
      //error ekak awoth eka console eken capture krnw
      console.log(err);
    });
});

router.route("/").get((req, res) => {
  Student.find()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const { name, age, gender } = req.body;

  //update karann one value thiyena object ekak hadanawa
  const updateStudent = {
    name,
    age,
    gender,
  };

  const update = await Student.findByIdAndUpdate(userId, updateStudent)
    .then(() => {
      res.status(200).send({ status: "User updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with updating data" });
    });
});

router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await Student.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "User deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with delete data", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;

  try {
    let user = await Student.findById(userId);
    res.status(200).send({ status: "User Fetched", user: user });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ status: "Error with get user", error: err.message });
  }
});

module.exports = router;
