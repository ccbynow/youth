$(function(){
          $(":radio[name='iszhusu']").click(function(){
        var curtab=$(":radio[name='iszhusu']").filter(":checked").val();
        $(".住宿,.不住宿").hide().filter("."+curtab).show(); 
      });
          $(":radio[name='daibiao']").click(function(){
        var curtab=$(":radio[name='daibiao']").filter(":checked").val();
        $(".会员,.非会员,.学生").hide().filter("."+curtab).show(); 
      });
        $(".demoform").Validform(
            {
              tiptype:2, 
              tipSweep:false,
              showAllError:false,
              datatype:{
                "*6-20": /^[^\s]{6,20}$/,
                "z2-4" : /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,4}$/,
            "need":function(gets,obj,curform,regxp){
        var need=1,
          numselected=curform.find("input[name='"+obj.attr("name")+"']:checked").length;
        return  numselected >= need ? true : "请至少选择"+need+"项！";
      },
                "phone":function(gets,obj,curform,regxp){
              /*参数gets是获取到的表单元素值，
                obj为当前表单元素，
                curform为当前验证的表单，
                regxp为内置的一些正则表达式的引用。*/
      
              var reg1=regxp["m"],
                reg2=/^((0[0-9]{2,3})-)([0-9]{7,8})(-([0-9]{3,}))?$/,
                mobile=curform.find(".PhoneNumber");
              
              if(reg1.test(mobile.val())){return true;}
              if(reg2.test(gets)){return true;}
              
              return false;
            }

              },
              
              usePlugin:{
                passwordstrength:{
                minLen:6,
                maxLen:18,
                beforeSubmit:function(curform){
                  return false;
                },
                trigger:function(obj,error){

                  if(error){
                    obj.parent().next().find(".Validform_checktip").show();
                    obj.parent().next().find(".passwordStrength").hide();
                  }else{
                    obj.parent().next().find(".Validform_checktip").hide();
                    obj.parent().next().find(".passwordStrength").show(); 
                  }
                }
              }
              }
              
            }
              );
       })