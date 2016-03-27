// $('.all').on('click', function(e){
// $this = this;
// $.each($(this).parents('ul').find('input'), function(i, item){
//  $(item).prop('checked', $this.checked);
// });
// });
var circulary = {
    "array": ['Біль в серці', 'Підвищений тиск', 'Понижений тиск']
};
var urinary = {
    "array": ['Біль в нирках']
};
var nervous = {
    "array": ['Біль в вухах', 'Біль в очах', 'Стрес', 'Тривога']
}
var digestive = {
    "array": ['Нудота', 'Біль в животі', 'Блювота', 'Діарея', 'Здуття']
}
var respiratory = {
    "array": ['Нежить', 'Біль в горлі', 'Сухий кашель', 'Вологий кашель', 'Чхання', 'Задишка']
}
var skeletal = {
    "array": ['Біль в суглобах', 'Слабкість', 'Біль в м\'язах']
}
var integumentary = {
    "array": ['Поріз', 'Почервоніння']
}
$(function () {
    var secondStep = false;
    function sendAjax() {
        var i = 0;
        var nazvayakas = [];
        nazvayakas[i] = true;
        $("#cont").hide();
        nazvayakas[++i] = $("#fancy-checkbox-danger").is(":checked");
        nazvayakas[++i] = $("#fancy-checkbox-warning").is(":checked");
        nazvayakas[++i] = $("#fancy-checkbox-nerv").is(":checked");
        nazvayakas[++i] = $("#fancy-checkbox-success").is(":checked");
        nazvayakas[++i] = $("#fancy-checkbox-info").is(":checked");
        nazvayakas[++i] = $("#fancy-checkbox-skelet").is(":checked");
        nazvayakas[++i] = $("#fancy-checkbox-skin").is(":checked");
        var count = 0;
        for (var j = 0; j < nazvayakas.length; j++) {
            if (nazvayakas[j]) {
                count++;
            }
        }
        var count2 = 0;


        if (nazvayakas[7]) {
            var text = '<div class="col-md-4">'+
                '<h4 id="integumentary">Покривна система</h4>' +
                '<ul>';

            for (var j = 0; j < integumentary.array.length; j++) {
                text +='<li><label><input type="checkbox" id = "integumentary-' + count2 + '">' + integumentary.array[j] + '</label></li>';
                count2++;
            }
            text += '</ul>' + '</div>';
            $("#cont2").prepend(text);
        }
        count2 = 0;
        if (nazvayakas[6]) {
            var text = '<div class="col-md-4">'+
                '<h4 id="skeletal">Опорно-рухова система</h4>' +
                '<ul>';

            for (var j = 0; j < skeletal.array.length; j++) {
                text +='<li><label><input type="checkbox" id = "skeletal-' + count2 + '">' + skeletal.array[j] + '</label></li>';
                count2++;
            }
            text += '</ul>' + '</div>';
            $("#cont2").prepend(text);
        }

        count2 = 0;
        if (nazvayakas[5]) {
            var text = '<div class="col-md-4">'+
                '<h4 id="respiratory">Дихальна система</h4>' +
                '<ul>';

            for (var j = 0; j < respiratory.array.length; j++) {
                text +='<li><label><input type="checkbox" id = "respiratory-' + count2 + '">' + respiratory.array[j] + '</label></li>';
                count2++;
            }
            text += '</ul>' + '</div>';
            $("#cont2").prepend(text);
        }

        count2=0

        if (nazvayakas[4]) {
            var text = '<div class="col-md-4">'+
                '<h4 id="digestive">Травна система</h4>' +
                '<ul>';

            for (var j = 0; j < digestive.array.length; j++) {
                text +='<li><label><input type="checkbox" id = "digestive-' + count2 + '">' + digestive.array[j] + '</label></li>';
                count2++;
            }
            text += '</ul>' + '</div>';
            $("#cont2").prepend(text);
        }

        count2 = 0;


        if (nazvayakas[3]) {
            var text = '<div class="col-md-4">'+
                '<h4 id="nervous">Нервова система</h4>' +
                '<ul>';

            for (var j = 0; j < nervous.array.length; j++) {
                text +='<li><label><input type="checkbox" id = "nervous-' + count2 + '">' + nervous.array[j] + '</label></li>';
                count2++;
            }
            text += '</ul>' + '</div>';
            $("#cont2").prepend(text);
        }

        count2 = 0;

        if (nazvayakas[2]) {
            var text = '<div class="col-md-4">' +
                '<h4 id="urinary">Видільна система </h4>' +
                '<ul>';

            for (var j = 0; j < urinary.array.length; j++) {
                text += '<li><label><input type="checkbox" id = "urinary-' + count2 + '">' + urinary.array[j] + '</label></li>';
                count2++;
            }
            text += '</ul>' + '</div>';
            $("#cont2").prepend(text);
        }

         if (nazvayakas[1]) {
            var text = '<div class="col-md-4">' +
                '<h4 id="circulary">Кровоносна система</h4>' +
                '<ul>';
            //$("#cont2").append(
            //    '<div class="col-md-6">' +
            //    '<h4 id="circulary">Кровоносна система</h4>' +
            //    '<ul>');

            for (var j = 0; j < circulary.array.length; j++) {
                text += '<li><label><input type="checkbox" id="circulary-' + count2 + '">' + circulary.array[j] + '</label></li>';
                count2++;
            }
            text += '</ul>' + '</div>';
            $("#cont2").prepend(text);
        }

    
        if (nazvayakas[0]) {
            $("#cont2").prepend('<div class="col-md-4">' +
                '<h4> Загальні симптоми: </h4>' +
                '<ul>' +
                '<li><label><input type="checkbox" name="temperature" id="id-0"> Підвищена температура </label></li>' +
                '<li><label><input type="checkbox" name="high_temperature" id="id-1"> Висока температура</label></li>' +
                '<li><label><input type="checkbox" name="headache" id="id-2"> Головний біль </label></li>' +
                '</ul>' +
                '</div>');
        }
        
        secondStep = true;
		// $("#cont2").append('<div id = "accept" class="col-md-12">'+ 
// '<button type="button" id="buttonAccept2" class="btn btn-success">Прийняти</button>'+
// '</div>');
    }

    function func() {
        if($("#id-0").is(":checked")&&$("#respiratory-0").is(":checked")||$("#respiratory-4").is(":checked")&&$("#skeletal-1").is(":checked")){
        $("#cont3").prepend('<h3>Ваш діагноз: Застуда</h3>');}
		if($("#id-1").is(":checked")&&$("#respiratory-0").is(":checked")&&$("#respiratory-1").is(":checked")&&$("#respiratory-2").is(":checked")){
        $("#cont3").prepend('<h3>Ваш діагноз: Грип</h3>');}
		if($("#digestive-0").is(":checked")&&$("#digestive-1").is(":checked")||$("#id-0").is(":checked")||$("#digestive-2").is(":checked")||$("#digestive-3").is(":checked")){
        $("#cont3").prepend('<h3>Ваш діагноз: Отруєння</h3>');}
		if($("#urinary-0").is(":checked")){
        $("#cont3").prepend('<h3>Ваш діагноз: Нефрит</h3>');}
		if($("#nervous-0").is(":checked")){
        $("#cont3").prepend('<h3>Ваш діагноз: Отит</h3>');}
		if($("#integumentary-1").is(":checked")){
        $("#cont3").prepend('<h3>Ваш діагноз: Опік</h3>');}
		if($("#id-2").is(":checked")&&$("#circulary-1").is(":checked")){
        $("#cont3").prepend('<h3>Ваш діагноз: Гіпертонія</h3>');}
    }

    $('#buttonAccept').click(function () {
        if(!secondStep){
            sendAjax();
        } else {
            func();
        }
    });
	
});