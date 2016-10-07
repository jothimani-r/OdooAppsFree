$(document).ready(function(){
    $('.hr_recruit_extended').each(function(){
        var hr_recruit_extended = this;
//Set Readonly to EndDate Input's
        $(hr_recruit_extended).on('change', "input[id='is_still']", function (event) {
            var checked = this.checked
            var parentNode = this.parentNode;
            var inputEndDate = $(parentNode).next().find("input[id='end_date']");
            if (checked){
                inputEndDate.val();
                inputEndDate.attr('disabled', true);
            }else{
                inputEndDate.attr('disabled', false);
            }
        });
//Set Readonly to Permanent Address Input's
        $(hr_recruit_extended).on('change', "input[name='is_same_address']", function (event) {
            var checked = this.checked
            var parentNode = this.offsetParent;
            var nextUntilNodes = $(parentNode).nextUntil();
            var allInputs = $(nextUntilNodes).find("input, select")
            if (checked){
                allInputs.val('');
                allInputs.attr('disabled', true);
            }else{
                allInputs.attr('disabled', false);
            }
        });
//Adding Educational information fields with different names
    eduIndex = 0;
    $('#infoEducation')
        .on('click', '#add_more', function(){
        eduIndex++;
            var $template = $('#infoEducationGroupTemplate'),
                $clone = $template
                            .clone()
                            .removeClass('hide')
                            .removeAttr('id')
                            .attr('data-edu-index', eduIndex)
                            .insertBefore($template);
            $clone
                .find("[name='name']").attr('name', 'edu['+eduIndex+'].name').end()
                .find("[name='study_field']").attr('name', 'edu['+eduIndex+'].study_field').end()
                .find("[name='organization']").attr('name', 'edu['+eduIndex+'].organization').end()
                .find("[name='location']").attr('name', 'edu['+eduIndex+'].location').end()
                .find("[name='start_date']").attr('name', 'edu['+eduIndex+'].start_date').end()
                .find("[name='is_still']").attr('name', 'edu['+eduIndex+'].is_still').end()
                .find("[name='end_date']").attr('name', 'edu['+eduIndex+'].end_date').end()
                .find("[name='grade']").attr('name', 'edu['+eduIndex+'].grade').end();
            $("[name='eduindex']").attr('value', eduIndex);
        })
        .on('click', '#remove_more', function(){
            var $row  = $(this).parents('.infoEducationGroup');
            $row.remove();
        });
//Adding Certifications information fields with different names
    cerIndex = 0;
    $('#infoCertification')
        .on('click', '#add_more', function(){
        cerIndex++;
            var $template = $('#infoCertificationGroupTemplate'),
                $clone = $template
                            .clone()
                            .removeClass('hide')
                            .removeAttr('id')
                            .attr('data-cer-index', cerIndex)
                            .insertBefore($template);
            $clone
                .find("[name='name']").attr('name', 'cer['+cerIndex+'].name').end()
                .find("[name='certification']").attr('name', 'cer['+cerIndex+'].certification').end()
                .find("[name='organization']").attr('name', 'cer['+cerIndex+'].organization').end()
                .find("[name='location']").attr('name', 'cer['+cerIndex+'].location').end()
                .find("[name='start_date']").attr('name', 'cer['+cerIndex+'].start_date').end()
                .find("[name='is_still']").attr('name', 'cer['+cerIndex+'].is_still').end()
                .find("[name='end_date']").attr('name', 'cer['+cerIndex+'].end_date').end();
            $("[name='cerindex']").attr('value', cerIndex);
        })
        .on('click', '#remove_more', function(){
            var $row  = $(this).parents('.infoCertificationGroup');
            $row.remove();
        });
//Adding Previous Employer's information fields with different names
    empIndex = 0;
    $('#infoEmployer')
        .on('click', '#add_more', function(){
        empIndex++;
            var $template = $('#infoEmployerGroupTemplate'),
                $clone = $template
                            .clone()
                            .removeClass('hide')
                            .removeAttr('id')
                            .attr('data-cer-index', empIndex)
                            .insertBefore($template);
            $clone
                .find("[name='name']").attr('name', 'emp['+empIndex+'].name').end()
                .find("[name='organization']").attr('name', 'emp['+empIndex+'].organization').end()
                .find("[name='location']").attr('name', 'emp['+empIndex+'].location').end()
                .find("[name='start_date']").attr('name', 'emp['+empIndex+'].start_date').end()
                .find("[name='is_still']").attr('name', 'emp['+empIndex+'].is_still').end()
                .find("[name='end_date']").attr('name', 'emp['+empIndex+'].end_date').end()
                .find("[name='notice_period']").attr('name', 'emp['+empIndex+'].notice_period').end()
                .find("[name='type']").attr('name', 'emp['+empIndex+'].type').end()
                .find("[name='referee_name']").attr('name', 'emp['+empIndex+'].referee_name').end()
                .find("[name='referee_position']").attr('name', 'emp['+empIndex+'].referee_position').end()
                .find("[name='referee_contact']").attr('name', 'emp['+empIndex+'].referee_contact').end();
            $("[name='empindex']").attr('value', empIndex);
        })
        .on('click', '#remove_more', function(){
            var $row  = $(this).parents('.infoEmployerGroup');
            $row.remove();
        })
        .on('change', "input[id='is_still']", function(){
            var checked = this.checked;
            var $noticePeriod  = $(this).parents('.infoEmployerGroup').find("#notice_period");
            if (checked){
                $noticePeriod.val('');
                $noticePeriod.attr('disabled', false);
            }else{
                $noticePeriod.attr('disabled', true);
            }
        });
    });
})