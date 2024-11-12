const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        isLiked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        isLiked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLiked: false
    }
]

let postContainerEle = document.getElementById("post-container")


for(let i = 0 ; i < posts.length; i++){


    postContainerEle.innerHTML  += `<div class="posts">
                <div class="post-top-details" id="top-details">

                    <img src="${posts[i].avatar}">
                    <div class="post-top-user-details">
                        <p class="bold-em">${posts[i].name}</p>
                        <p>${posts[i].location}</p>
                    </div>

                </div>
                <div class="post-img" id="post-img">
                    <img src="${posts[i].post}">
                </div>
                <div class="post-bottom-details">
                    
                    <div class="post-reaction-icons">
                        <img src="/images/icon-heart.png" class="heart-${i}" onclick="toggle(${i})"  >
                        <img src="/images/icon-comment.png">
                        <img src="/images/icon-dm.png">
                    </div>
                    <p class="bold-em likes-${i}">${posts[i].likes} likes</p>
                    <p><span class="bold-em">${posts[i].username}</span> ${posts[i].comment} </p>

                </div>
            </div>`




}
                    
                    


function toggle(index){

    let heartNum = document.querySelector(`.heart-${index}`)
    let likesNum = document.querySelector(`.likes-${index}`)


    posts[index].isLiked = !posts[index].isLiked

    if(posts[index].isLiked){
        heartNum.setAttribute("src","/images/red-heart-icon.png")
        posts[index].likes = posts[index].likes+1
        likesNum.innerHTML = `${posts[index].likes} likes`

    }else{
        posts[index].likes = posts[index].likes-1

        likesNum.innerHTML = `${posts[index].likes} likes`

        heartNum.setAttribute("src","/images/icon-heart.png")
    }
    console.log(  posts[index].isLiked)



}



                

