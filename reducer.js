let state;
function changeState(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { count: state.count + 1 };
    case "DECREASE_COUNT":
      return { count: state.count - 1 };

    default:
      return state;
  }
}

let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");

increase.addEventListener("click", function() {
  dispatch({ type: "INCREASE_COUNT" });
});

decrease.addEventListener("click", function() {
  dispatch({ type: "DECREASE_COUNT" });
});

function dispatch(action) {
  state = changeState(state, action);
  render();
}

function render() {
  let container = document.getElementById("container");
  container.textContent = state.count;
}

dispatch({ type: "@@INIT" });
