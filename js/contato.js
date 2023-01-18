
function validacaoContato(frm)
{

  if (frm.nome.value=="")
  {
    alert ("Campo NOME Obrigatório!");
    frm.nome.focus();
    return false;
  }

  if (frm.email.value=="")
  {
    alert ("Campo E-MAIL Obrigatório!");
    frm.email.focus();
    return false;
  }

  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(frm.email.value)))
  {
    alert("E-mail digitado inválido!");
    frm.email.focus();
    return false;
  }   

  if (frm.mensagem.value=="")
  {
    alert ("Campo MENSAGEM Obrigatório!");
    frm.mensagem.focus();
    return false;
  }

  if (frm.total.value=="")
  {
    alert ("Para garantir que você é humano e não um robô,\nResponda o cálculo!");
    frm.total.focus();
    return false;
  }

  return true;
}
