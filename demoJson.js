function ajaxFunc(param){

    var res = {
        "busiDataResp": [
            {
                "groupName": "一级",
                "children": [{
                    "groupName": "二级1",
                    "children": [{
                        "groupName": "三级1",
                        "children": [{
                            "groupName": "四级1",
                            "children": [],
                            "userList": [{
                                "userId": "12311",
                                "userName":"五级1"
                            },{
                                "userId": "12312",
                                "userName":"五级2"
                            },{
                                "userId": "12313",
                                "userName":"五级3"
                            }]}],
                        "userList": [{
                            "userId": "1231",
                            "userName":"四级2"
                        },{
                            "userId": "1232",
                            "userName":"四级3"
                        },{
                            "userId": "1233",
                            "userName":"四级4"
                        }]
                    }],
                    "userList": [{
                        "userId": "131",
                        "userName":"三级2"
                    },{
                        "userId": "132",
                        "userName":"三级3"
                    }]
                },{
                    "groupName": "二级2",
                    "children": [],
                    "userList": []
                }],
                "userList": []
            }
        ]
    }
    return res
}
