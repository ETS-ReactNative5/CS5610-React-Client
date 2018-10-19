import axios from 'axios'

let courses =  [
    {
        "id": 1,
        "title": "Course 1",
        "OwnedBy" : "Aman",
        "modules": [
            {
                "id": 11,
                "title": "Module 1 1",
                "lessons": [
                    {
                        "id": 111,
                        "title": "Lesson 1 1 1",
                        "topics": [
                            {"id" : 1111 , "title": "Topic 1 1 1 1" ,
                                "widgets": [
                                    {   "id" : 11111,
                                        "type": "HEADING",
                                        "size": 1,
                                        "text": "The Document Object Model"
                                    },
                                    {   "id" : 11112,
                                        "type": "PARAGRAPH",
                                        "text": "This topic introduces the DOM"
                                    },
                                    {   "id" : 11113,
                                        "type": "LIST",
                                        "order" :"ordered",
                                        "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {   "id" : 11114,
                                        "type": "IMAGE",
                                        "src": "https://picsum.photos/200"
                                    },
                                    {   "id" : 11115,
                                        "type": "LINK",
                                        "title": "The DOM",
                                        "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            },
                            {"id" : 1112 , "title": "Topic 1 1 1 2" ,
                                "widgets" :[]
                            }
                        ]
                    },
                    {
                        "id": 112,
                        "title": "Lesson 1 1 2",
                        "topics": [
                            {"id":1121 , "title": "Topic 1 1 2 1" ,
                                "widgets" :[]}
                        ]
                    }
                ]
            },
        ]
    },
    {
        "id": 2,
        "title": "Course 2",
        "OwnedBy" : "Jose",
        "modules": [
            {
                "id": 21,
                "title": "Module 2 1",
                "lessons": [
                    {
                        "id": 211,
                        "title": "Lesson 2 1 1",
                        "topics": [
                            {"id" : 2111 , "title": "Topic 2 1 1 1" ,
                                "widgets": [
                                    {   "id" : 21111,
                                        "type": "HEADING",
                                        "size": 1,
                                        "text": "The Document Object Model"
                                    },
                                    {   "id" : 21112,
                                        "type": "PARAGRAPH",
                                        "text": "This topic introduces the DOM"
                                    },
                                    {   "id" : 21113,
                                        "type": "LIST",
                                        "order" :"ordered",
                                        "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {   "id" : 21114,
                                        "type": "IMAGE",
                                        "src": "https://picsum.photos/200"
                                    },
                                    {   "id" : 21115,
                                        "type": "LINK",
                                        "title": "The DOM",
                                        "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            },
                            {"id" : 2112 , "title": "Topic 2 1 1 2" ,
                                "widgets" :[{   "id" : 21121,
                                    "type": "HEADING",
                                    "size": 1,
                                    "text": "The Document Object Model"
                                },
                                    {   "id" : 21122,
                                        "type": "PARAGRAPH",
                                        "text": "This topic introduces the DOM"
                                    },
                                    {   "id" : 21123,
                                        "type": "LIST",
                                        "order" :"ordered",
                                        "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },]
                            }
                        ]
                    },
                    {
                        "id": 212,
                        "title": "Lesson 2 1 2",
                        "topics": [
                            {"id":2121 , "title": "Topic 2 1 2 1" ,
                                "widgets" :[{   "id" : 21211,
                                    "type": "HEADING",
                                    "size": 1,
                                    "text": "The Document Object Model"
                                },
                                    {   "id" : 21212,
                                        "type": "PARAGRAPH",
                                        "text": "This topic introduces the DOM"
                                    },
                                    {   "id" : 21213,
                                        "type": "LIST",
                                        "order" :"ordered",
                                        "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },]}
                        ]
                    }
                ]
            },
        ]
    },
    {
        "id": 3,
        "title": "Course 3",
        "OwnedBy" : "Mike",
        "modules": [
            {
                "id": 31,
                "title": "Module 3 1",
                "lessons": [
                    {
                        "id": 311,
                        "title": "Lesson 3 1 1",
                        "topics": [
                            {"id" : 3111 , "title": "Topic 3 1 1 1" ,
                                "widgets": [
                                    {   "id" : 31111,
                                        "type": "HEADING",
                                        "size": 1,
                                        "text": "The Document Object Model"
                                    },
                                    {   "id" : 31112,
                                        "type": "PARAGRAPH",
                                        "text": "This topic introduces the DOM"
                                    },
                                    {   "id" : 31113,
                                        "type": "LIST",
                                        "order" :"ordered",
                                        "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {   "id" : 31114,
                                        "type": "IMAGE",
                                        "src": "https://picsum.photos/200"
                                    },
                                    {   "id" : 31115,
                                        "type": "LINK",
                                        "title": "The DOM",
                                        "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            },
                            {"id" : 3112 , "title": "Topic 3 1 1 2" ,
                                "widgets" :[{   "id" : 31121,
                                    "type": "HEADING",
                                    "size": 1,
                                    "text": "The Document Object Model"
                                },
                                    {   "id" : 31122,
                                        "type": "PARAGRAPH",
                                        "text": "This topic introduces the DOM"
                                    }]
                            }
                        ]
                    },
                    {
                        "id": 312,
                        "title": "Lesson 3 1 2",
                        "topics": [
                            {"id":3121 , "title": "Topic 3 1 2 1" ,
                                "widgets" :[ {   "id" : 31211,
                                    "type": "IMAGE",
                                    "src": "https://picsum.photos/200"
                                },
                                    {   "id" : 31212,
                                        "type": "LINK",
                                        "title": "The DOM",
                                        "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }]}
                        ]
                    }
                ]
            },
        ]
    },
];

class CourseService {

    findCourseNameByCourseId = (courseId)=>{
        let courseName;
        courses.forEach((course)=>{
            if(parseInt(course.id,10) === parseInt(courseId,10)){
                courseName = course.title
            }
        });
        return courseName;
    };

    findCourseById = (courseId)=>{
        let result = [];
        courses.forEach((course)=>{
            if(parseInt(course.id,10) === parseInt(courseId,10)){
                result =  course;
            }
        });
        return result
    };

    findAllCourses = ()=>{
        return axios("http://localhost:8080/api/course");
        // return courses;
    };

    createCourse = (course)=>{
        let id = new Date();
        let newCourses = [...courses];
        newCourses.push({
            "id":id,
            "title":course,
            "OwnedBy":"Aman",
            "modules":[]
        });
        courses = newCourses;
    };

    deleteCourse = (courseId)=>{
        courses.forEach((course,index)=>{
            if(course.id === courseId){
                courses.splice(index,1);
            }
        });
    };

    editCourse =(courseId, courseName)=>{
        this.findCourseById(courseId).title = courseName;
    };

    findModuleByModuleIdCourseId = (moduleId , courseId)=>{
        let result =[];
        this.findCourseById(courseId).modules.forEach((module)=>{
            if(parseInt(module.id,10) === parseInt(moduleId,10)) result =  module
        });

        return result;
    };

    findAllModulesForCourseId = (courseId) => {
        return axios("http://localhost:8080/api/course/"+courseId+"/module");
        // let result =[];
        // courses.forEach((course)=>{if(parseInt(course.id,10)===parseInt(courseId,10))result = course.modules;});
        // return result;
    };

    createModuleForCourseId = (moduleName , courseId) => {
        let id = Math.round((new Date()).getTime() / 1000);
        let obj = {
            "id":id,
            "title":moduleName,
            "lessons":[]
        };
        courses.forEach((course)=>{
            if(parseInt(course.id,10) === parseInt(courseId,10)){
                course.modules  = [...course.modules , obj];
            }
        });
    };

    deleteModuleForCourseId = (moduleId , courseId) => {
        courses.forEach((course) =>{
            if(parseInt(course.id,10) === parseInt(courseId,10)){
                course.modules.forEach((module , index)=>{
                    if(parseInt(module.id,10) === parseInt(moduleId,10)){
                        course.modules.splice(index , 1)
                    }
                })
            }
        })
    };

    updateModuleListItem = (courseId, moduleId , moduleName)=>{
        this.findAllModulesForCourseId(courseId).forEach((module)=>{
            if(moduleId === module.id){
                module.title = moduleName
            }
        })
    };

    findAllLessonsForModule = (courseId , moduleId)=>{
        return axios("http://localhost:8080/api/module/"+moduleId+"/lesson")
        // return this.findModuleByModuleIdCourseId (moduleId , courseId).lessons
    };

    createLessonForModuleId = ( courseId, moduleId,lessonName)=>{
        let id = Math.round((new Date()).getTime() / 100000);
        let obj = {
            "id":id,
            "title":lessonName,
            "topics":[]
        };
        this.findModuleByModuleIdCourseId(moduleId,courseId).lessons
            = [...this.findModuleByModuleIdCourseId(moduleId,courseId).lessons ,obj]
    };

    deleteLessonForModuleId = ( courseId, moduleId,lessonId)=>{
        let lessonsList =  this.findModuleByModuleIdCourseId(moduleId,courseId).lessons;
        lessonsList.forEach((lesson,index)=>{
            if(parseInt(lesson.id,10) === parseInt(lessonId,10)){
                lessonsList.splice(index,1)
            }
        })

    };

    updateLesson =(courseId, moduleId , lessonId , lessonName)=>{
        let lessonsList =  this.findModuleByModuleIdCourseId(moduleId,courseId).lessons;
        lessonsList.forEach((lesson)=>{
            if(lesson.id === lessonId){
                lesson.title = lessonName
            }
        })

    };

    findAllTopicForModule = (LessonId)=>{
        return axios("http://localhost:8080/api/lesson/"+LessonId+"/topic")
        // let result =[];
        // this.findAllLessonsForModule(courseId,ModuleId).forEach((lesson)=>{
        //     if(parseInt(lesson.id,10) === parseInt(LessonId,10)){
        //         result = lesson;
        //     }
        // });
        // return result;
    };

    deleteTopicForLessonId =(courseId,moduleId,lessonId,topicId)=>{
        let topics = this.findAllTopicForModule(courseId,moduleId ,lessonId).topics;
        topics.forEach((topic,index)=>{
            if(parseInt(topic.id,10) === parseInt(topicId,10)){
                topics.splice(index,1)
            }
        });

    };

    addNewTopicforLesson =(courseId,moduleId,lessonId,topicName)=>{
        let id = Math.round((new Date()).getTime() / 100000);
        let obj = {
            "id":id,
            "title":topicName,
            "widgets" : []
        };
        this.findAllTopicForModule(courseId,moduleId,lessonId).topics =
            [...this.findAllTopicForModule(courseId,moduleId,lessonId).topics,obj]
    };

    updateTopic =(courseId , moduleId ,lessonId , topicId ,topicName)=>{
        this.findAllTopicForModule(courseId , moduleId ,lessonId).topics.forEach((topic)=>{
            if(topic.id === topicId){
                topic.title=topicName
            }
        })
    };

    findTopicById = (topicId) => {
        let result = null;
        courses.forEach((course)=>{
            course.modules.forEach((module=>{
                module.lessons.forEach((lesson)=>{
                    lesson.topics.forEach((topic)=>{
                        if(topic.id===topicId){
                            result = topic
                        }
                    })
                })
            }))
        });
        return result
    };

    createWidget = (topicId)=> {
        let id = Math.round(Math.random()*1000000);
        let widget = {"id":id ,"type" : "HEADING", "size": 1,"text": "AutoGenerated Text" };
        let topic = this.findTopicById(topicId);
        let oldWidgets = topic.widgets;
        topic.widgets = [...oldWidgets , widget];
    };

    findWidgets = (topicId)=>{
        return this.findTopicById(topicId).widgets;
    };

    findWidget = (widgetId)=>{
        let result = null;
        courses.forEach((course)=>{
            course.modules.forEach((module=>{
                module.lessons.forEach((lesson)=>{
                    lesson.topics.forEach((topic)=>{
                        topic.widgets.forEach((widget)=>{
                            if(widget.id === widgetId) result=widget
                        })
                    })
                })
            }))
        });
        return result
    };

    findTopicByWidgetId = (widgetId)=>{
        let result = null;
        courses.forEach((course)=>{
            course.modules.forEach((module=>{
                module.lessons.forEach((lesson)=>{
                    lesson.topics.forEach((topic)=>{
                        topic.widgets.forEach((widget)=>{
                            if(widget.id === widgetId) result=topic
                        })
                    })
                })
            }))
        });
        return result
    };

    changeWidget = (topicId, widgetId,kind) =>{
        let topic = this.findTopicById(topicId);
        let newWidgetList =[];
        this.findWidgets(topicId).forEach((widget)=>{
            if(widget.id !== widgetId){
                newWidgetList.push(widget)
            }
            else{
                kind===1 && newWidgetList.push({"id":widget.id ,"type":"HEADING" ,"size": 1 , "text" : ""});
                kind===2 && newWidgetList.push({"id":widget.id ,"type":"PARAGRAPH" ,"text": ""});
                kind===3 && newWidgetList.push({"id":widget.id ,"type":"LIST" ,  "order" :"unordered","items": ""});
                kind===4 && newWidgetList.push({"id":widget.id ,"type":"IMAGE" ,"src": ""});
                kind===5 && newWidgetList.push({"id":widget.id ,"type":"LINK" ,"title": "" , "href" : ""});
            }
        });
        topic.widgets = newWidgetList
    };

    arrowUp = (topicId , widgetId)=>{
        let topic = this.findTopicById(topicId);
        let newWidgetList =[];
        let widgets = this.findWidgets(topicId);
        for(let i=0;i<widgets.length;i++){
            if(widgets[i].id === widgetId){
                newWidgetList.pop();
                newWidgetList.push(widgets[i]);
                newWidgetList.push(widgets[i-1]);
            }
            else{
                newWidgetList.push(widgets[i]);
            }
        }
        topic.widgets = newWidgetList;

    };

    arrowDown = (topicId , widgetId)=>{
        let topic = this.findTopicById(topicId);
        let newWidgetList =[];
        let widgets = this.findWidgets(topicId);
        for(let i=0;i<widgets.length;i++){
            if(widgets[i].id === widgetId){
                newWidgetList.push(widgets[i+1]);
                newWidgetList.push(widgets[i]);
                i++;
            }
            else{
                newWidgetList.push(widgets[i]);
            }
        }
        topic.widgets = newWidgetList;
    };

    headingChange = (topicId , widgetId , id) =>{
        let topic = this.findTopicById(topicId);
        let newWidgetList =[];
        this.findWidgets(topicId).forEach((widget)=>{
            if(widget.id !== widgetId){
                newWidgetList.push(widget)
            }
            else{
                id===1 && newWidgetList.push({"id":widget.id ,"type":"HEADING" ,"size": 1 , "text" : widget.text});
                id===2 && newWidgetList.push({"id":widget.id ,"type":"HEADING" ,"size": 2 , "text" : widget.text});
                id===3 && newWidgetList.push({"id":widget.id ,"type":"HEADING" ,"size": 3 , "text" : widget.text});
                id===4 && newWidgetList.push({"id":widget.id ,"type":"HEADING" ,"size": 4 , "text" : widget.text});
            }
        });
        topic.widgets = newWidgetList
    };

    listChange = (topicId , widgetId , id)=>{
        let topic = this.findTopicById(topicId);
        let newWidgetList =[];
        this.findWidgets(topicId).forEach((widget)=>{
            if(widget.id !== widgetId){
                newWidgetList.push(widget)
            }
            else{
                id===1 && newWidgetList.push({"id":widget.id ,"type":"LIST" ,"order": "ordered" , "items" : widget.items});
                id===2 && newWidgetList.push({"id":widget.id ,"type":"LIST" ,"order":  "unordered" , "items" : widget.items})
            }
        });
        topic.widgets = newWidgetList
    };

    saveWidgetsForTopic = (topicId, widgets)=>{
        let topic = this.findTopicById(topicId);
        topic.widgets = widgets
    };

    updateWidget = (widgetId, newWidget)=>{
        courses.forEach((course)=>{
            course.modules.forEach((module=>{
                module.lessons.forEach((lesson)=>{
                    lesson.topics.forEach((topic)=>{
                        topic.widgets.forEach((widget)=>{
                            if(widget.id === widgetId) widget=newWidget
                        })
                    })
                })
            }))
        });
    };

    deleteWidget = (widgetId)=>{
        let result =[];
        let topic = this.findTopicByWidgetId(widgetId);
        topic.widgets.forEach((widget)=>{
            if(widget.id !== widgetId){
                result.push(widget);
            }
        });
        topic.widgets = result
    };

}
export default CourseService;
