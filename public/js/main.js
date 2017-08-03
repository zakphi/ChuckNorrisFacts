$(() => {
  console.log('script loaded')

  const fact = {}

  $('#generate_fact').click(() => {
    console.log('generated random fact')
    $.ajax({
      url: 'https://api.icndb.com/jokes/random/?escape=javascript',
      method: 'GET',
      success: (data) => {
        fact.fact = data.value.joke
        console.log(fact.fact)
        $('section p').text(fact.fact)
        if($('section p').text() !== ''){
          $('span').html("<button id='save_fact'>save fact</button>")
        }
      }
    })
    $('#save_fact').attr('disabled', false)
  })

  $(document).on("click", "#save_fact", function(){
    console.log('fact saved')

    $.ajax({
      url: '/',
      method: 'POST',
      data: fact
    })

    $('#save_fact').attr('disabled', true)
  });
  
})