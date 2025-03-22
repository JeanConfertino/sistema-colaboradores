// CADASTRAR NOVO COLABORADOR
document
  .getElementById("form-colaborador")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const dados = {
      nome: document.getElementById("nome").value,
      cargo: document.getElementById("cargo").value,
      departamento: document.getElementById("departamento").value,
      data_admissao: document.getElementById("data_admissao").value,
    };

    const resposta = await fetch("backend/salvar.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });

    const resultado = await resposta.json();

    if (resultado.status === "sucesso") {
      alert("Colaborador cadastrado!");
      document.getElementById("form-colaborador").reset();
      carregarColaboradores();
    } else {
      alert("Erro ao cadastrar colaborador!");
    }
  });

// FUNÇÃO PARA CARREGAR OS COLABORADORES NA TABELA
async function carregarColaboradores() {
  const resposta = await fetch("backend/listar.php");
  const colaboradores = await resposta.json();

  const tbody = document.querySelector("#tabela-colaboradores tbody");
  tbody.innerHTML = "";

  colaboradores.forEach((colab) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${colab.id}</td>
      <td>${colab.nome}</td>
      <td>${colab.cargo}</td>
      <td>${colab.departamento}</td>
      <td>${colab.data_admissao}</td>
      <td>
        <button class="acao-btn" onclick='abrirModalEdicao(${JSON.stringify(
          colab
        )})'>✏️</button>
        <button class="acao-btn" onclick='excluirColaborador(${
          colab.id
        })'>🗑️</button>
      </td>
    `;
    tbody.appendChild(linha);
  });
}

// MODAL DE EDIÇÃO
const modal = document.getElementById("modal-edicao");
const fecharModal = document.getElementById("fechar-modal");

fecharModal.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

function abrirModalEdicao(colaborador) {
  document.getElementById("edit-id").value = colaborador.id;
  document.getElementById("edit-nome").value = colaborador.nome;
  document.getElementById("edit-cargo").value = colaborador.cargo;
  document.getElementById("edit-departamento").value = colaborador.departamento;
  document.getElementById("edit-data-admissao").value =
    colaborador.data_admissao;
  modal.style.display = "block";
}

// EDITAR COLABORADOR
document
  .getElementById("form-edicao")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const dados = {
      id: document.getElementById("edit-id").value,
      nome: document.getElementById("edit-nome").value,
      cargo: document.getElementById("edit-cargo").value,
      departamento: document.getElementById("edit-departamento").value,
      data_admissao: document.getElementById("edit-data-admissao").value,
    };

    const resposta = await fetch("backend/editar.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });

    const resultado = await resposta.json();

    if (resultado.status === "sucesso") {
      alert("Colaborador atualizado com sucesso!");
      modal.style.display = "none";
      carregarColaboradores();
    } else {
      alert("Erro ao atualizar colaborador!");
    }
  });

// EXCLUIR COLABORADOR
async function excluirColaborador(id) {
  if (confirm("Tem certeza que deseja excluir este colaborador?")) {
    const resposta = await fetch("backend/excluir.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const resultado = await resposta.json();

    if (resultado.status === "sucesso") {
      alert("Colaborador excluído com sucesso!");
      carregarColaboradores();
    } else {
      alert("Erro ao excluir colaborador!");
    }
  }
}

// INICIAR
carregarColaboradores();
