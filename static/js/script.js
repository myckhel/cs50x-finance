const toggleAble = (element, bool, text) => {
  $(element).prop('disabled', bool);
  let $this = $(element);
  if (bool) {
  	var loadingText = `<i class="fa fa-circle-o-notch fa-spin"></i> ${text || ' loading... '}`;
    $this.data('original-text', $($this).html());
    $this.html(loadingText);
  }else{
    $this.html($this.data('original-text'))
  }
}

const balance = (balance, txt) => (`<h3>${txt}<br> <span class='text-warning'>${balance}</span></h3>`)
