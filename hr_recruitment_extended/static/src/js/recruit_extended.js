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
                .find("[name='name']").attr('name', 'edu['+cerIndex+'].name').end()
                .find("[name='certification']").attr('name', 'edu['+cerIndex+'].certification').end()
                .find("[name='organization']").attr('name', 'edu['+cerIndex+'].organization').end()
                .find("[name='location']").attr('name', 'edu['+cerIndex+'].location').end()
                .find("[name='start_date']").attr('name', 'edu['+cerIndex+'].start_date').end()
                .find("[name='is_still']").attr('name', 'edu['+cerIndex+'].is_still').end()
                .find("[name='end_date']").attr('name', 'edu['+cerIndex+'].end_date').end();
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
                .find("[name='name']").attr('name', 'edu['+empIndex+'].name').end()
                .find("[name='organization']").attr('name', 'edu['+empIndex+'].organization').end()
                .find("[name='location']").attr('name', 'edu['+empIndex+'].location').end()
                .find("[name='start_date']").attr('name', 'edu['+empIndex+'].start_date').end()
                .find("[name='is_still']").attr('name', 'edu['+empIndex+'].is_still').end()
                .find("[name='end_date']").attr('name', 'edu['+empIndex+'].end_date').end()
                .find("[name='notice_period']").attr('name', 'edu['+empIndex+'].notice_period').end()
                .find("[name='type']").attr('name', 'edu['+empIndex+'].type').end()
                .find("[name='referee_name']").attr('name', 'edu['+empIndex+'].referee_name').end()
                .find("[name='referee_position']").attr('name', 'edu['+empIndex+'].referee_position').end()
                .find("[name='referee_contact']").attr('name', 'edu['+empIndex+'].referee_contact').end();
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