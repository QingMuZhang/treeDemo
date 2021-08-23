(function() {    
    var opUsers = [];  
    function initChooseAppro() {
        var selMenu = $('.sel-menu');
        if( selMenu.length > 0 ) {		
            selMenu.each(function(){
                var accordion = $(this);
                //detect change in the input[type="checkbox"] value
                accordion.on('change', 'input[type="checkbox"]', function(){
                    var checkbox = $(this);
                    console.log(checkbox.prop('checked'));
                    ( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(3) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(3);
                    ( checkbox.prop('checked') ) ? checkbox.siblings('p').find('.sel-menu-down').addClass('active') : checkbox.siblings('p').find('.sel-menu-down').removeClass('active');
                });
            });
            //审核人选择
            $('.sel-per').on('click', function(e){
                $('.sel-per').removeClass('active');
                $(this).addClass('active');
                let isConstants = false;
                if(opUsers.length != 0){
                    for(let i=0;i<opUsers.length;i++){
                        if(opUsers[i].opUser ==$(this).prop('id')){
                            isConstants = true;
                        }
                    }
                    if(!isConstants){
                        opUsers.push({
                            opUser:$(this).prop('id'),
                            opUserName:$(this).find('span').text()
                        }); 
                    }
                }else{
                    opUsers.push({
                        opUser:$(this).prop('id'),
                        opUserName:$(this).find('span').text()
                    });
                }
                var opUserHtml = "";
                if(opUsers.length != 0){
                    $.each(opUsers,function(index, opUser) {
                        let vs = 'deleteSel' + index;                        
                        opUserHtml  += '<a>'+opUser.opUserName+'<span class="deleteSel" id="vs"></span></a>'                                                                    
                    });
                    $(".sel-selected").empty();
                    $(".sel-selected").append(opUserHtml.toString()); 
                }
                //删除人员选择
                $('.deleteSel').on('click', function(e){
                    $(this).parent().remove();
                    var index = $(this).prop('id').slice(9);
                    opUsers.splice(index,1);
                })                                                                   				                      
            })
        }			
    }
    

    //查询审核人员
    //最小单元
    // if(info3.children.length > 0 || info3.userList.length > 0){
    //     auditUserHtml1 += '<ul class="item-none">'
    //     if(info3.children.length > 0){
    //         $.each(info3.children,function(index, info4) {
    //             auditUserHtml1 += '<li>'+
    //             '<input type="checkbox">'+
    //             '<p class="sel-menu-d"><i class="sel-menu-down"></i><span>'+ info4.groupName +'</span><i></i></p>'
    //         });
    //     }
    //     if(info3.userList.length > 0){
    //         $.each(info3.userList,function(index, info4) {
    //             auditUserHtml1 += '<li>'+
    //             '<p class="sel-menu-c sel-per" id="'+info4.userId+'"><span>'+ info4.userName +'</span><i class="user" style="width:20px;height:20px;"></i></p>'+
    //             '</li>'
    //         });
    //     }
    //     auditUserHtml1 +='</ul>'
    // }
    // auditUserHtml1 +='</li>'
    function getAuditUser(){
        var param = $('#search-input').val();
            var res = ajaxFunc(param);      
                 //后端接口调用         
                var busiDataResp = res.busiDataResp;
                var auditUserHtml1 = "";
                    if(busiDataResp && busiDataResp.length > 0){
                        var auditUserHtml2 = "";
                        $.each(busiDataResp,function(index, info1) {
                            auditUserHtml1 += '<li>'+
                                                '<input type="checkbox">'+
                                                '<p class="sel-menu-a"><i class="sel-menu-down"></i><span>'+ info1.groupName +'</span><i></i></p>'
                            if(info1.children.length > 0 || info1.userList.length > 0){
                                auditUserHtml1 += '<ul class="item-none">'
                                if(info1.children.length > 0){
                                    $.each(info1.children,function(index, info2) {
                                        auditUserHtml1 += '<li>'+
                                        '<input type="checkbox">'+
                                        '<p class="sel-menu-b"><i class="sel-menu-down"></i><span>'+ info2.groupName +'</span><i></i></p>'
                                        if(info2.children.length > 0 || info2.userList.length > 0){
                                            auditUserHtml1 += '<ul class="item-none">'
                                            if(info2.children.length > 0){
                                                $.each(info2.children,function(index, info3) {
                                                    auditUserHtml1 += '<li>'+
                                                    '<input type="checkbox">'+
                                                    '<p class="sel-menu-c"><i class="sel-menu-down"></i><span>'+ info3.groupName +'</span><i></i></p>'
                                                    if(info3.children.length > 0 || info3.userList.length > 0){
                                                        auditUserHtml1 += '<ul class="item-none">'
                                                        if(info3.children.length > 0){
                                                            $.each(info3.children,function(index, info4) {
                                                                auditUserHtml1 += '<li>'+
                                                                '<input type="checkbox">'+
                                                                '<p class="sel-menu-d"><i class="sel-menu-down"></i><span>'+ info4.groupName +'</span><i></i></p>'
                                                                if(info4.children.length > 0 || info4.userList.length > 0){
                                                                    auditUserHtml1 += '<ul class="item-none">'
                                                                    if(info4.children.length > 0){
                                                                        $.each(info4.children,function(index, info5) {
                                                                            auditUserHtml1 += '<li>'+
                                                                            '<input type="checkbox">'+
                                                                            '<p class="sel-menu-e"><i class="sel-menu-down"></i><span>'+ info5.groupName +'</span><i></i></p>'
                                                                        });
                                                                    }
                                                                    if(info4.userList.length > 0){
                                                                        $.each(info4.userList,function(index, info5) {
                                                                            auditUserHtml1 += '<li>'+
                                                                            '<p class="sel-menu-e sel-per" id="'+info4.userId+'"><span>'+ info5.userName +'</span><i class="user" style="width:20px;height:20px;"></i></p>'+
                                                                            '</li>'
                                                                        });
                                                                    }
                                                                    auditUserHtml1 +='</ul>'
                                                                }
                                                                auditUserHtml1 +='</li>'
                                                            });
                                                        }
                                                        if(info3.userList.length > 0){
                                                            $.each(info3.userList,function(index, info4) {
                                                                auditUserHtml1 += '<li>'+
                                                                '<p class="sel-menu-d sel-per" id="'+info4.userId+'"><span>'+ info4.userName +'</span><i class="user" style="width:20px;height:20px;"></i></p>'+
                                                                '</li>'
                                                            });
                                                        }
                                                        auditUserHtml1 +='</ul>'
                                                    }
                                                    auditUserHtml1 +='</li>'
                                                });
                                            }
                                            if(info2.userList.length > 0){
                                                $.each(info2.userList,function(index, info3) {
                                                    auditUserHtml1 += '<li>'+
                                                    '<p class="sel-menu-c sel-per" id="'+info3.userId+'"><span>'+ info3.userName +'</span><i class="user" style="width:20px;height:20px;"></i></p>'+
                                                    '</li>'
                                                });
                                            }
                                            auditUserHtml1 +='</ul>'
                                        }
                                        auditUserHtml1 +='</li>'
                                    });
                                }
                                if(info1.userList.length > 0){
                                    $.each(info1.userList,function(index, info2) {
                                        auditUserHtml1 += '<li>'+
                                        '<p class="sel-menu-b sel-per" id="'+info2.userId+'"><span>'+ info2.userName +'</span><i class="user" style="width:20px;height:20px;"></i></p>'+
                                        '</li>'
                                    });
                                }
                                auditUserHtml1 +='</ul>'
                            }
                            auditUserHtml1 +='</li>'
                        });
                        $(".sel-menu").empty();    
                        $(".sel-menu").append(auditUserHtml1.toString());
                        if(param != ''){
                            $(".sel-menu ul").show();
                            $(".sel-menu-down").addClass('active');
                            $(".sel-menu input").attr('checked','abc'); 
                        }
                        initChooseAppro();                                                       				
                    }
    }
    initChooseAppro();
    getAuditUser();
    //查看更多				
})()
