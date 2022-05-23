function validate(){
    let source = document.getElementById('source').value;
    let pipeline = document.getElementById('pipeline').value;
    let projectName = document.getElementById('project_name').value;
    let bucketName = document.getElementById('bucket_name').value;
    let storage = document.getElementById('storage').value;
    let credintals = document.getElementById('credintals').value;
    let runEvery = document.getElementById('run-every').value;

    checkSource(source);
    checkPipeline(pipeline);
    checkProject(projectName);
    checkBucket(bucketName);
    checkStorage(storage);
    checkCredintals(credintals);
    checkEvery(runEvery);
}

let special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

function checkSource(source){
    if(source.length >= 5 && source != special && source[0]!= '_' && source[0]!= '-' && source[0]!= '+'){
        document.getElementById('source').classList.add('success')
        document.getElementById('source').classList.replace('error' , 'success')
        document.getElementById('source_error').innerHTML = '';
    }
    else{
        document.getElementById('source').classList.add('error');
        document.getElementById('source_error').innerText = 'there should be atleast 5 character  and no special character is allowed at starting or between'
    }
}

function checkPipeline(pipeline){
    if(pipeline.length >= 5 && pipeline != special && pipeline[0]!= '_' && pipeline[0]!= '-' && pipeline[0]!= '+'){
        document.getElementById('pipeline').classList.add('success')
        document.getElementById('pipeline').classList.replace('error' , 'success')
        document.getElementById('pipeline_error').innerHTML = '';
    }
    else{
        document.getElementById('pipeline').classList.add('error');
        document.getElementById('pipeline_error').innerText = 'there should be atleast 5 character  and no special character is allowed at starting or between'
    }
}

function checkProject(projectName){
    if(projectName.length >= 5 && projectName != special && projectName[0]!= '_' && projectName[0]!= '-' && projectName[0]!= '+'){
        document.getElementById('project_name').classList.add('success')
        document.getElementById('project_name').classList.replace('error' , 'success')
        document.getElementById('project_error').innerHTML = '';
    }
    else{
        document.getElementById('project_name').classList.add('error');
        document.getElementById('project_error').innerText = 'there should be atleast 5 character  and no special character is allowed at starting or between'
    }
}
function checkBucket(bucketName){
    if(bucketName.length >= 5 && bucketName != special && bucketName[0]!= '_' && bucketName[0]!= '-' && bucketName[0]!= '+'){
        document.getElementById('bucket_name').classList.add('success')
        document.getElementById('bucket_name').classList.replace('error' , 'success')
        document.getElementById('bucket_error').innerHTML = '';
    }
    else{
        document.getElementById('bucket_name').classList.add('error');
        document.getElementById('bucket_error').innerText = 'there should be atleast 5 character  and no special character is allowed at starting or between'
    }
}
function checkStorage(storage){
    if(storage.length >= 5 && storage != special && storage[0]!= '_' && storage[0]!= '-' && storage[0]!= '+'){
        document.getElementById('storage').classList.add('success')
        document.getElementById('storage').classList.replace('error' , 'success')
        document.getElementById('storage_error').innerHTML = '';
    }
    else{
        document.getElementById('storage').classList.add('error');
        document.getElementById('storage_error').innerText = 'there should be atleast 5 character  and no special character is allowed at starting or between'
    }
}
function checkCredintals(credintals){
    if(credintals.length >= 5 && credintals != special && credintals[0]!= '_' && credintals[0]!= '-' && credintals[0]!= '+'){
        document.getElementById('credintals').classList.add('success')
        document.getElementById('credintals').classList.replace('error' , 'success')
        document.getElementById('credintals_error').innerHTML = '';
    }
    else{
        document.getElementById('credintals').classList.add('error');
        document.getElementById('credintals_error').innerText = 'there should be atleast 5 character  and no special character is allowed at starting or between'
    }
}
function checkEvery(runEvery){
    if(runEvery.length >= 5 && runEvery != special && runEvery[0]!= '_' && runEvery[0]!= '-' && runEvery[0]!= '+'){
        document.getElementById('run-every').classList.add('success')
        document.getElementById('run-every').classList.replace('error' , 'success')
        document.getElementById('every_error').innerHTML = '';
    }
    else{
        document.getElementById('run-every').classList.add('error');
        document.getElementById('every_error').innerText = 'there should be atleast 5 character  and no special character is allowed at starting or between'
    }
}
