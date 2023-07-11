const subjects = ['Selecione','Comercial', 'Dúvidas', 'Revenda', 'Outro'];

const container = document.querySelector('.containerSelect');

const labelSelect = document.createElement('label');
labelSelect.innerText = 'Assuntos';
labelSelect.classList.add('form-label');
labelSelect.setAttribute('for', 'subject');
container.appendChild(labelSelect);

const select = document.createElement('select');
select.classList.add("form-select");
select.setAttribute('id','subject');
container.appendChild(select);

function addSubject(subjects){
  subjects.forEach(subject => {
    const option = document.createElement('option');
    option.innerText = subject;
    select.appendChild(option);
  })
}
addSubject(subjects);

const btnForm = document.querySelector('#btn-form');
const form = document.querySelector('#form-contact')

btnForm.addEventListener('click', (e) => {
  e.preventDefault();
  let userName = document.querySelector("#name").value;
  let userMensage = document.querySelector('#mensage').value; 

  const sendForm = `User: ${userName} - Mensage: ${userMensage}`
  console.log(sendForm);  
  alert('Mensagem enviada com sucesso!');
  form.reset();
})
