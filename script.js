const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const userText = document.getElementById('user-text').value;
  
  const preposition = /(\s|^)(в|без|до|для|за|через|над|по|из|у|около|под|о|про|на|к|перед|при|с|между)\s/gi;
  const dash = /\s(-|—)\s/g;
  const quotes = /"(.*?)"/g;
  
  const typographed =
        userText.replace(preposition, "$1$2&nbsp;")
        .replace('©', '&copy;')
        .replace('#', '№')
        .replace(dash, '&nbsp;&mdash; ')
        .replace(quotes, '&laquo;$1&raquo;');
  document.getElementById('typographed-text').value = typographed;
});