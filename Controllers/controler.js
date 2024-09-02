const Volunteer = require('../Module/mongoscema');


const defaultController = async (req, res) => {
  console.log("default controller");
  const todos = await Volunteer.find();
  res.render("index", { todos });
};


const addController = async (req, res) => {
  console.log("add todo");

  const { name, email, phone, availability, interest, experience } = req.body;
  console.log("body", { name, email, phone, availability, interest, experience });

  let interests = [];
  if (Array.isArray(interest)) {
    interests = interest;
  } else if (interest) {
    interests.push(interest);
  }

  const newVolunteer = new Volunteer({
    name,
    email,
    phone,
    availability,
    interests,
    experience,
  });

  await newVolunteer.save();
  console.log("Saved Volunteer:", newVolunteer);

  res.redirect("/");
};


const editController = async (req, res) => {
 
  const { id } = req.params;

  const singleTodo = await Volunteer.findById(id);

  if (!singleTodo) {
    return res.status(404).send("Volunteer not found");
  }
  res.render("update", { singleTodo });
};


const updateTodoController = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, availability, interest, experience } = req.body;

  let interests = [];
  if (Array.isArray(interest)) {
    interests = interest;
  } else if (interest) {
    interests.push(interest);
  }

  await Volunteer.findByIdAndUpdate(id, {
    name,
    email,
    phone,
    availability,
    interests,
    experience,
  }); 

  res.redirect("/");
};


const deleteTodoController = async (req, res) => {
  const { id } = req.params;
  await Volunteer.findByIdAndDelete(id);
  res.redirect("/");
};

// View selected volunteers
const viewTodosController = async (req, res) => {
  console.log("ViewTodos route hit!");
  const todoIds = req.body.todos || [];

  if (todoIds.length === 0) {
    return res.redirect("/");  
  }

  const selectedTodos = await Volunteer.find({
    _id: { $in: todoIds }
  });  

  console.log("Selected Todos:", selectedTodos);

  res.render('view', { todos: selectedTodos });
};


module.exports = {
  defaultController,
  addController,
  editController,
  updateTodoController,
  deleteTodoController,
  viewTodosController,
};
