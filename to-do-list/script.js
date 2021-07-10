const createTask = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const orderedListTask = document.getElementById('lista-tarefas');
const deleteAllTasks = document.getElementById('apaga-tudo');
const deleteFinishedTasks = document.getElementById('remover-finalizados');
const deleteSelectedTask = document.getElementById('remover-selecionado');
const saveTasks = document.getElementById('salvar-tarefas');
const moveUp = document.getElementById('mover-cima');
const moveDown = document.getElementById('mover-baixo');

createTask.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = inputTask.value;
  inputTask.value = '';
  orderedListTask.appendChild(li);
});

orderedListTask.addEventListener('click', (event) => {
  const evento = event;
  if (evento.target.tagName === 'LI') {
    for (let index = 0; index < orderedListTask.children.length; index += 1) {
      orderedListTask.children[index].classList.remove('selected');
    }
    evento.target.classList.add('selected');
  }
});

orderedListTask.addEventListener('dblclick', (event) => {
  const evento = event;
  evento.target.classList.toggle('completed');
});

deleteAllTasks.addEventListener('click', () => {
  for (let index = 0; index < orderedListTask.children.length; index += 0) {
    orderedListTask.removeChild(orderedListTask.children[index]);
  }
});

deleteFinishedTasks.addEventListener('click', () => {
  const finalizados = document.getElementsByClassName('completed');
  for (let index = 0; index < finalizados.length; index += 0) {
    orderedListTask.removeChild(finalizados[index]);
  }
});

deleteSelectedTask.addEventListener('click', () => {
  const deleteThis = document.getElementsByClassName('selected')[0];
  orderedListTask.removeChild(deleteThis);
});

moveUp.addEventListener('click', () => {
  const moveThis = document.getElementsByClassName('selected')[0];
  if (moveThis && moveThis.previousSibling) {
    orderedListTask.insertBefore(moveThis, moveThis.previousSibling);
  }
});

moveDown.addEventListener('click', () => {
  const moveThis = document.getElementsByClassName('selected')[0];
  if (moveThis && moveThis.nextSibling) {
    orderedListTask.insertBefore(moveThis, moveThis.nextSibling.nextSibling);
  }
});

// Implementação do localStorage no saveTasks e no window.onload (bonus - Tarefa 12 - Feito em parceria com
// Murilo Maia e Fernando Oliveira e Ivan Zigoni)
saveTasks.addEventListener('click', () => {
  localStorage.clear();
  localStorage.setItem('liSaved', orderedListTask.innerHTML);
});

window.onload = () => {
  if (localStorage.liSaved) {
    orderedListTask.innerHTML = `${localStorage.getItem('liSaved')}`;
  }
};

// Fim do codigo em conjunto.
