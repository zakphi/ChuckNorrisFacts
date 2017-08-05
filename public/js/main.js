$(() => {
  console.log('script loaded')

  const fact = {}

  $('#fact_types input').on('change', () => {
    $('#fact_types span').html('<button>')
    let $gen_fact_btn = $('#fact_types span button')
    $gen_fact_btn.attr('type', 'submit')
    $gen_fact_btn.attr('id', 'generate_fact')
    $gen_fact_btn.text('click me for a fact')
  })

  $(document).on('click', '#generate_fact', () => {
    let fact_type = $('input[name=fact_type]:checked').val()

    let url = ''

    switch(fact_type){
      case 'random':
        url = 'https://api.icndb.com/jokes/random/?escape=javascript'
        break
      case 'general':
        url = 'https://api.icndb.com/jokes/random/?escape=javascript&exclude=[nerdy, explicit]'
        break
      case 'nerdy':
        url = 'https://api.icndb.com/jokes/random/?escape=javascript&limitTo=[nerdy]'
        break
      case 'explicit':
        url = 'https://api.icndb.com/jokes/random/?escape=javascript&limitTo=[explicit]'
    }

    fetch(url)
      .then(fetchRes => fetchRes.json())
      .then((data) => {
        fact.fact = data.value.joke
        $('#fact p').text(fact.fact)
        if($('#fact p').text() !== ''){
          $('#fact span').html('<button>')
          let $save_fact_btn = $('#fact span button')
          $save_fact_btn.attr('id', 'save_fact')
          $save_fact_btn.text('save fact')
        }
        $('#save_fact').attr('disabled', false)
      })
  })

  $(document).on("click", "#save_fact", () => {
    console.log('fact saved')

    $.ajax({
      url: '/',
      method: 'POST',
      data: fact
    })

    $('#save_fact').attr('disabled', true)
  });
  
})