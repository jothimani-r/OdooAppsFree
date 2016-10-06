$(document).ready(function(){
    $('.hr_recruit_extended').each(function(){
        var hr_recruit_extended = this;
//Set Readonly to EndDate Input's
        var $isStill= $("input[name='is_still']", hr_recruit_extended);
        $isStill.change(function (event) {
            var checked = this.checked
            var parentNode = this.parentNode;
            var inputEndDate = $(parentNode).next().find("input[name='end_date']");
            if (checked){
                inputEndDate.val();
                inputEndDate.attr('readonly', true);
            }else{
                inputEndDate.attr('readonly', false);
            }
        });
//Set Readonly to Permanent Address Input's
        var $isSameAddress= $("input[name='is_same_address']", hr_recruit_extended);
        $isSameAddress.change(function (event) {
            var checked = this.checked
            var parentNode = this.offsetParent;
            var nextUntilNodes = $(parentNode).nextUntil();
            var allInputs = $(nextUntilNodes).find("input, select")
            if (checked){
                allInputs.val('');
                allInputs.attr('readonly', true);
            }else{
                allInputs.attr('readonly', false);
            }
        });
    });
})