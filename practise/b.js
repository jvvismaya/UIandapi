
$(document).ready(function(){
        $('#delete').on('click',function(){
            deletePatient()
        });
       $('#getalldetails').on('click',function(){
            getdetails()
        })
        $('#get-all').on('click',function(){
            details()
        })
        $('#addBtn').on('click',function(){
            addpatient()
        })
        $('#update-doctorname').on('click',function(){
            updatedoctor()

        })


function  deletePatient(){
    var pid = document.getElementById("deletepatient").value;
    console.log(pid);
    $.ajax({
        type: 'DELETE',
        url:"http://localhost:8080/webapp/webresources/hospital/delete/"+pid,
        success:alert("patient deleted"+pid)
    })
  
}
function getdetails(){
    var $patient=$('#pedetails');
    var pdetails=document.getElementById('getdetails').value;
    console.log(pdetails);
    $.ajax({
        type:'GET',
        url:'http://localhost:8080/webapp/webresources/hospital/patientdetails/'+pdetails,
        success:(function(data){
            $.each(data,function(i,hospital){
                $patient.append('<li>Hospital:patientid:'+hospital.patientid+',Patientname:'+hospital.patientname+',Concern:'+hospital.concern+',Doctorname:'+hospital.doctorname+',Consultancyfee:'+hospital.consultancyfee+'</li>')

            });
        })
    })
}
function details(){
    var $patients=$('#ptdetails');
    $.ajax({
        type:'get',
        url:'http://localhost:8080/webapp/webresources/hospital/patientdetails',
        success:function(patients){
            console.log(patients);
            $.each(patients.hospital,function(i,hospital){
                $patients.append('<li>Hospital:patientid:'+hospital.patientid+',Patientname:'+hospital.patientname+',Concern:'+hospital.concern+',Doctorname:'+hospital.doctorname+',Consultancyfee:'+hospital.consultancyfee+'</li>')
            });
        },
        error:function(){
            alert('error');
        }
    });
}

function addpatient(){
    var pat={};
    pat.patientid=$('#pid').val();
    pat.patientname=$('#pname').val();
    pat.concern=$('#con').val();
    pat.doctorname=$('#dname').val();
    pat.consultancyfee=$('#fei').val();
    var patObj = JSON.stringify(pat);
    $.ajax({
        url:"http://localhost:8080/webapp/webresources/hospital/newpatient",
        type:'POST',
        data: patObj,
        contentType: 'application/json; charset=UTF-8',
        success:function(){
            alert("succes")
        },
        error:function(){
            alert("error")
        }
    });
}

function updatedoctor(){
    var $doctor=$('updateDetails');
    var doctorid = document.getElementById('getpatid').value;
    console.log(doctorid);

    $.ajax({
        type:'get',
        url:'http://localhost:8080/webapp/webresources/hospital/update',
        contentType: 'application/json; charset=UTF-8',

    })

}
});
