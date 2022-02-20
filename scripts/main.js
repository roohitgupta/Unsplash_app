

async function makeAPIcall (url) {

    try{
        let res = await fetch(url);
        let data = await res.json();

        return data;
    }catch(error){
        console.log('error:', error);
    }
}


function appendPictures (data, parent) {

    data.forEach(element => {
        
        let div = document.createElement('div');

        let image = document.createElement('img');
        image.src = element.urls.small;

        let p = document.createElement('p');
        p.innerText = element.user.name;

        div.append(image, p);
        div.id = 'pictures'

        div.onclick = () => {

            localStorage.setItem('clicked_div', JSON.stringify(element));
        }
        
        
        parent.append(div);

    });
}


export { makeAPIcall, appendPictures };