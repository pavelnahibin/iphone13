new Choices('#model', {
   searchEnabled: false,
   itemSelectText: '',
});

new Choices('#color', {
   searchEnabled: false,
   itemSelectText: '',
});

$('#form-order').on('submit', function(event){
   event.preventDefault();

   $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'POST',
      dataType: 'html',
      data: $('#form-order').serialize(),
      success: function(data){
         console.log(data)
            $('#form-order').html('Дякуємо ваша заявка успішно відправлена!');
            $('.form__submit').hide();
      }
   })
})
