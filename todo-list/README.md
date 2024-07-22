Todo app made with React + Vite. 
SCSS + BEM for styling

To run: npm run dev

Most of the logic is inside MyTasks component, which owns state and necessary methods to handle tasks data. It passes down these props
to it's children components, Task, NewTaskForm and AddTaskModal.

Note:
    If the API used to retrieve tasks were real, the app wouldn't alter MyTasks "todos" state in any of it's methods. Instead, every method
    would call getTodos function to get the new data and refresh MyTasks component as the state changes. I added the fictional HTTP methods
    anyway.

    Form validation just checks that every field to add a task is populated. 
 
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
