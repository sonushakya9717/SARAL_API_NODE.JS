// const express = require("express");
// const fs = require("fs");
// const bodyparser = require("body-parser");
// var co = express()
// var read = JSON.parse(fs.readFileSync("file.json"));

// co.use(bodyparser.urlencoded({extended:true}));

// ///////////////////// Get end_points////////////////////////////

// //////To show courses list//////
// co.get('/',(req,res)=>{
//    let courses=[];
//     for(i of read){
//         let course={}
//         course['id']=i.id;
//         course['name']=i.name;
//         course['description']=i.description;
//         courses.push(course);
//     }
//     res.send(courses);
// });



// //////To show main course  of specific id////////////
// co.get("/:id",(req,res)=>{
//     let id1=req.params.id;
//     main$course={}
//     for(iid of read){
//         if(id1==iid.id){
//             main$course['id']=iid.id;
//             main$course['name']=iid.name;
//             main$course["description"]=iid.description;
//             res.send(main$course);
//         };
//     };
// });

// /////TO show whole data/////
// co.get('/complete',(req,res)=>{
//     res.send(read);
// });
// ////To show whole subcourses//////
// co.get('/subcourses',(req,res)=>{
//     whole$subcourses=[]
//     for(s of read){
//     for (j of s.submission) {
//         sub={};
//         sub["id"]=j.id;
//         sub['courseid']=j.courseid;
//         sub['name']=j.name;
//         sub['description']=j.escription;
//         whole$subcourses.push(sub);
//     };    
//     };
// res.send(whole$subcourses);
// });




// //To show Subcourses//
// co.get('/subcourses/:id',(req,res)=>{
//     let id =req.params.id;
//     let subcourses=[];
//     for(i of read){
//         if (i.id==id){
//             let submission=i.submission;
//             for(j of submission){
//                 let subcourse={}
//                 subcourse['id']=j.id;
//                 subcourse['courseid']=j.courseid;
//                 subcourse["name"]=j.name;
//                 subcourse["description"]=j.description;
//                 subcourses.push(subcourse);
//             };
//         };
//     };
//     res.send(subcourses);
//  });


//  //////To show specific subcourse of particular id///////
//  co.get("/subcourse/:id/:courseid",(req,res)=>{
//      let id1=req.params.id;
//      let courseid1=req.params.courseid;
//      for(sub of read){
//          if(id1==sub.id){
//              for(p$course of sub.submission){
//                  if(courseid1==p$course.courseid){
//                      c$course={};
//                      c$course['id']=p$course.id;
//                      c$course['courseid']=p$course.courseid;
//                      c$course['name']=p$course.name;
//                      c$course['description']=p$course.description;
//                  }
//              }
//          }
//      }
//      res.send(c$course);
//  });

//  //////To show whole comments////////
//  co.get('/comments',(req,res)=>{
//     let comments=[]
//     for(i of read){
//         let comment=i.submission
//         for(k of comment){
//             if (!("usersummision"  in k)){
//                 k.usersummision=[]
//             }
//             var usersummison=k.usersummision;
//             for(j of usersummison){
//                 comments.push(j)
//             }

//         }
//     }
//     res.send(comments);
//  });

//  /////////// To show comments for a particular course///////
//  co.get('/comments/:id',(req,res)=>{
//     let comments=[];
//     let id1=req.params.id;
//     for(i of read){
//         if(i.id==id1){
//         for(j of i.submission){
//             if (!("usersummision"  in j)){
//                 j.usersummision=[]
//             }
//             var usersummison=j.usersummision;
//             for(j of usersummison){
//                 comments.push(j)
//             }

//         }
//     }
// }
// res.send(comments);
//  });

//  ////To show comments of paticular subcourse//////
//     co.get('/comments/:id/:courseid',(req,res)=>{
//         let comments=[];
//         let id2=req.params.id;
//         let courseid=req.params.courseid;
//         for(i of read){
//             if(i.id==id2){
//             for(j of i.submission){
//                 if(courseid==j.courseid){
//                 if (!("usersummision"  in j)){
//                     j.usersummision=[]
//                 }
//                 var usersummison=j.usersummision;
//                 for(j of usersummison){
//                     comments.push(j)
//                 }
    
//             }}
//         }
//     }
//     res.send(comments);
//      });   


//      ///////to show paticalur comment of given email on a particular subcourse.//////
//      co.get('/comments/:id/:courseid/:emailid',(req,res)=>{
//         let comments=[];
//         let emailid=req.params.emailid;
//         let id2=req.params.id;
//         let courseid=req.params.courseid;
//         for(i of read){
//             if(i.id==id2){
//             for(j of i.submission){
//                 if(courseid==j.courseid){
//                 if (!("usersummision"  in j)){
//                     j.usersummision=[]
//                 }
//                 var usersummison=j.usersummision;
//                 for(j of usersummison){
//                     if(j.username===emailid){
//                         res.send(j);
//                     };
                    
//                 };
    
//             }};
//         };
//     };
//      });   



//      ///////////////////////////////Post end_points//////////////////////////////

// //////////////////post a new course;

//      co.post('/new',(req,res)=>{
//         let idd = read.length;
//         let dict1 = read[idd-1];
//         let newid = dict1.id + 1;
//         let main1={};
//         main1["id"]=newid;
//         main1['name']=(req.body.name);
//         main1['description']=(req.body.description);
//         main1['submission']=[]
//         read.push(main1);
//         fs.writeFileSync("file.json",JSON.stringify(read,null,4));
//         res.send("updated");
//      });


//  ////////////post a new subcourse//////////////////
//  co.post("/new/subcourse/:id",(req,res)=>{
// let id4=req.params.id;
// for(news of read){
//     if(id4==news.id){
//         let sub$list=news.submission;
//         let sub$dict={};
//         sub$dict['id']=id4;
//         sub$dict['courseid']=req.body.courseid;
//         sub$dict['name']=req.body.name;
//         sub$dict['description']=req.body.description;
//         sub$dict['usersummision']=[]
//         sub$list.push(sub$dict);
//         fs.writeFileSync("file.json",JSON.stringify(read,null,4));
//         res.send("updated");
//     }
// };
//  });



//  ////////////////post comment by new emailid////////////////////

//  co.post("/new/subcourse/:id/:courseid",(req,res)=>{
//     let id5=req.params.id;
//     let courseid5=req.params.courseid;
//     for(news of read){
//         if(id5==news.id){
//             for(taja of news.submission){
//                 if(courseid5==taja.courseid){
//                     if (!("usersummision"  in taja)){
//                         taja.usersummision=[]
//                     };
//                     let comments={};
//                     comments['id']=id5;
//                     comments['courseid']=courseid5;
//                     comments['username']=req.body.username;
//                     comments['usersubmissions']=[req.body.usersubmissions];
//                     (taja.usersummision).push(comments);
//                     fs.writeFileSync("file.json",JSON.stringify(read,null,4));

//             }
//         }
//     };
//     };
//     res.send("updated");
//      });

// //////////////////////// to edit the maincourse /////////////////////////
// co.put("/editcourse/:id",(req,res)=>{
//     let id6 = req.params.id;
//     for( var sonu of read){
//         if(id6==sonu.id){
//             sonu["name"]=req.body.name;
//             sonu["description"]=req.body.description;
//             fs.writeFileSync("file.json",JSON.stringify(read,null,4));

//         }
//         res.send("updated");
//     }
// });

// ////////////////////// to edit a subcourse //////////////////////

// co.put("/editcourse/:id/:courseid",(req,res)=>{
//     let id7 = req.params.id;
//     let courseid6 = req.params.courseid;
//     for (a of read){
//         if (id7 == a.id){
//             for(b of a.submission){
//                 if (courseid6 == b.courseid){
//                     b["name"]=req.body.name;
//                     b["description"]=req.body.description;
//                     fs.writeFileSync("file.json",JSON.stringify(read,null,4));

//                 }
//             }
//         }
//         res.send("updated");
//     }
// })

// /////////////////// To Edit Comments /////////////////////

// co.put("/editcourse/:id/:courseid/:emailid/:commentno",(req,res)=>{
//     let id8 = req.params.id;
//     let courseid7 = req.params.courseid;
//     let eid = req.params.emailid;
//     let cno = req.params.commentno;
//     for(c of read){
//         if (id8 == c.id ){
//             for (d of c.submission){
//                 if(courseid7 == d.courseid){
//                     for (e of d.usersummision){
//                         if (eid == e.username){
//                             if(cno <= e.usersubmissions.length){
//                                 e.usersubmissions[cno-1]=req.body.editedcomment;
//                                 // console.log(req.body.editedcomment);
//                                 fs.writeFileSync("file.json",JSON.stringify(read,null,4));
                                
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }

//     res.send("updated");
// });
// /////////////////////////// To delete a main course ///////////////////////////

// co.delete("/delete/:id",(req,res)=>{
//     const index=(req.params.id)-1;
//     for(i in read){
//         if (i==index){
//             read.splice(index,1);
//             fs.writeFileSync("file.json",JSON.stringify(read,null,4));
//         };
//     };
//     res.send("deleted");
// });



/////////////////////////To delete subcourses of given main course////////////////////
// co.delete('/deletesubcourse/:id',(req,res)=>{
//     const index=(req.params.id)-1;
//     for (i in read){
//         if(i==index){
//           let list= read[i];
//           delete list.submission;
//           fs.writeFileSync("file.json",JSON.stringify(read,null,4));
//         }
//     }
//     res.send("deleted");
// });





//////////////////////// To delete comment by given email id of specific subcourse of particular main course//////
// co.delete('/deletecomment/:id/:courseid/:email',(req,res)=>{
//     let id=req.params.id;
//     let courseid=req.params.courseid;
//     let email=req.params.email;
//     for(i of read){
//         if(i.id ==id){
//             for( j of i.submission){
//                 if(j.courseid==courseid){
//                     for( l of j.usersummision){
//                         if(l.username==email){
//                             let index=(j.usersummision).indexOf(l);
//                             (j.usersummision).splice(index,1);
//                             fs.writeFileSync("file.json",JSON.stringify(read,null,4));

//                         }
//                     }
//                 }
//             }
//         }
//     }
// res.send("deleted successfully")
// });





// co.listen(1444 ,()=>{
//     console.log("server started");
    
// });








// var express=require("express");
// var mysql=require('mysql');
// var app=express()
// var connection=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'1234',
//     database:'sampleDB'
// })
// connection.connect(function(error){
// if(!!error){
//     console.log('Error');
// }
// else{console.log("connected");
// };
// });

// app.get('/',(req,res)=>{
//     connection.query("SELECT * FROM sampleDB",function(error, rows, fields){
//         if(!!error){console.log('Error');
//         }
//         else{
//             console.log('success');
//         }
//     })
// })

