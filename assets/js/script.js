
// login page js codes

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("ae-btn");

function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}


function togglePassword(inputId){
    var passwordInput = document.getElementById(inputId);
    if (passwordInput.type === "password"){
        passwordInput.type = "text";
    } else{
        passwordInput.type = "password";
    }
}
// login page js codes

$(document).ready(function(){
    $(".all-click").click(function(){ 
        $(".all").removeClass('ae-digital')
        $(".market").removeClass('ae-market')
        $(".off").removeClass('ae-off')
        $(".book").removeClass('ae-book')
    });
    $(".digital-click").click(function(){
        $(".digital").addClass('ae-digital')
        $(".market").removeClass('ae-market')
        $(".off").removeClass('ae-off')
        $(".book").removeClass('ae-book')
    })
    $(".market-click").click(function(){ 
        $(".market").addClass('ae-market')
        $(".digital").removeClass('ae-digital')
        $(".off").removeClass('ae-off')
        $(".book").removeClass('ae-book')
    });
    $(".book-click").click(function(){ 
        $(".book").addClass('ae-book')
        $(".market").removeClass('ae-market')
        $(".digital").removeClass('ae-digital')
        $(".off").removeClass('ae-off')
    });
    $(".off-click").click(function(){ 
        $(".market").removeClass('ae-market')
        $(".digital").removeClass('ae-digital')
        $(".off").addClass('ae-off')
        $(".book").removeClass('ae-book')
    });

    $(".item1-btn").click(function(){
        $(".item1").addClass('show')
    })
    $(".item2-btn").click(function(){
        $(".item2").addClass('show')
    })
    $(".item3-btn").click(function(){
        $(".item3").addClass('show')
    })
    $(".item4-btn").click(function(){
        $(".item4").addClass('show')
    })
    $(".item5-btn").click(function(){
        $(".item5").addClass('show')
    })
    $(".item6-btn").click(function(){
        $(".item6").addClass('show')
    })
    $(".item7-btn").click(function(){
        $(".item7").addClass('show')
    })
    $(".item8-btn").click(function(){
        $(".item8").addClass('show')
    })
    $(".item9-btn").click(function(){
        $(".item9").addClass('show')
    })
    $(".item10-btn").click(function(){
        $(".item10").addClass('show')
    })
    $(".item11-btn").click(function(){
        $(".item11").addClass('show')
    })
    $(".item12-btn").click(function(){
        $(".item12").addClass('show')
    })
    $(".item13-btn").click(function(){
        $(".item13").addClass('show')
    })
    $(".item14-btn").click(function(){
        $(".item14").addClass('show')
    })
    $(".item15-btn").click(function(){
        $(".item15").addClass('show')
    })
    $(".item16-btn").click(function(){
        $(".item16").addClass('show')
    })
    $(".item17-btn").click(function(){
        $(".item17").addClass('show')
    })
    $(".item18-btn").click(function(){
        $(".item18").addClass('show')
    })
    $(".item19-btn").click(function(){
        $(".item19").addClass('show')
    })
    $(".item20-btn").click(function(){
        $(".item20").addClass('show')
    })
    $(".item21-btn").click(function(){
        $(".item21").addClass('show')
    })
    $(".item22-btn").click(function(){
        $(".item22").addClass('show')
    })
    $(".item23-btn").click(function(){
        $(".item23").addClass('show')
    })
    $(".item24-btn").click(function(){
        $(".item24").addClass('show')
    })
    


    $(".delete-btn1").click(function(){
        $(".item1").removeClass('show')
    })
    $(".delete-btn2").click(function(){
        $(".item2").removeClass('show')
    })
    $(".delete-btn3").click(function(){
        $(".item3").removeClass('show')
    })
    $(".delete-btn4").click(function(){
        $(".item4").removeClass('show')
    })
    $(".delete-btn5").click(function(){
        $(".item5").removeClass('show')
    })
    $(".delete-btn6").click(function(){
        $(".item6").removeClass('show')
    })
    $(".delete-btn7").click(function(){
        $(".item7").removeClass('show')
    })
    $(".delete-btn8").click(function(){
        $(".item8").removeClass('show')
    })
    $(".delete-btn9").click(function(){
        $(".item9").removeClass('show')
    })
    $(".delete-btn10").click(function(){
        $(".item10").removeClass('show')
    })
    $(".delete-btn11").click(function(){
        $(".item11").removeClass('show')
    })
    $(".delete-btn12").click(function(){
        $(".item12").removeClass('show')
    })
    $(".delete-btn13").click(function(){
        $(".item13").removeClass('show')
    })
    $(".delete-btn14").click(function(){
        $(".item14").removeClass('show')
    })
    $(".delete-btn15").click(function(){
        $(".item15").removeClass('show')
    })
    $(".delete-btn16").click(function(){
        $(".item16").removeClass('show')
    })
    $(".delete-btn17").click(function(){
        $(".item17").removeClass('show')
    })
    $(".delete-btn18").click(function(){
        $(".item18").removeClass('show')
    })
    $(".delete-btn19").click(function(){
        $(".item19").removeClass('show')
    })
    $(".delete-btn20").click(function(){
        $(".item20").removeClass('show')
    })
    $(".delete-btn21").click(function(){
        $(".item21").removeClass('show')
    })
    $(".delete-btn22").click(function(){
        $(".item22").removeClass('show')
    })
    $(".delete-btn23").click(function(){
        $(".item23").removeClass('show')
    })
    $(".delete-btn24").click(function(){
        $(".item24").removeClass('show')
    })

    $(".delete-all").click(function(){
        $(".item1").removeClass('show')
        $(".item2").removeClass('show')
        $(".item3").removeClass('show')
        $(".item4").removeClass('show')
        $(".item5").removeClass('show')
        $(".item6").removeClass('show')
        $(".item7").removeClass('show')
        $(".item8").removeClass('show')
        $(".item9").removeClass('show')
        $(".item10").removeClass('show')
        $(".item11").removeClass('show')
        $(".item12").removeClass('show')
        $(".item13").removeClass('show')
        $(".item14").removeClass('show')
        $(".item15").removeClass('show')
        $(".item16").removeClass('show')
        $(".item17").removeClass('show')
        $(".item18").removeClass('show')
        $(".item19").removeClass('show')
        $(".item20").removeClass('show')
        $(".item21").removeClass('show')
        $(".item22").removeClass('show')
        $(".item23").removeClass('show')
        $(".item24").removeClass('show')
    })

    
})

function addingAlert(){
    alert("!کالا به سبد خرید اضافه شد!");
}

//let count = 1;
//function increseNum(){
 //   count++;
  //  document.getElementById("num1").textContent = count;
//}
//document.getElementById("num1").addEventListener("click",increseNum);

document.querySelectorAll('.counter').forEach(counter => {
    const numberElement = counter.querySelector('.number');
    const increaseButton = counter.querySelector('.increseNum');
    const decreaseButton = counter.querySelector('.decreaseNum');

    let count = 1;

    increaseButton.addEventListener('click', () => {
        count++;
        numberElement.textContent = count;
    })

    decreaseButton.addEventListener('click' , () => {
        count--;
        if (count < 0) count = 0;
        numberElement.textContent = count;
    });
});
