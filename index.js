
const img = document.querySelector('img');

async function getMVP(){
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=hgIKmZjANOXuCYWXTsCy9CYFz5ychwAF&s=jokic');

    const data = await response.json();
    img.src = data.data.images.original.url;

}

getMVP();