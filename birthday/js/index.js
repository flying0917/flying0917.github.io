window.onload = function() {
    $(".cake").click(function () {
        $("#mp3").get(0).play();

        $(".fire1").addClass("active");
        setTimeout(function () {
            $(".fire2").addClass("active");
            $(".body").addClass("active");
            setTimeout(function () {
                $(".fire3").addClass("active");
                setTimeout(function () {
                    $(".fire4").addClass("active");
                    $("body").addClass("bg-active");
                    $(".ban").addClass("ban-active");
                    setTimeout(function()
                    {
                        $(".cat").addClass("cat-active");
                        setTimeout(function()
                        {
                            $(".gift").addClass("gift-active");
                            $(".car").addClass("car-active");
                        },500)
                    },1000);
                }, 500);
            }, 500);
        }, 500);

    });
};