const navMenu = document.getElementById("nav-menu"),
      navToggle=document.getElementById("nav-toggle"),
      navClose=document.getElementById("nav-close")
/*=============== Show Menu ===============*/

if(navToggle)
{
    navToggle.addEventListener('click',() => 
    {
        navMenu.classList.add("show-menu")
    })
}


/*======= Menu Hidden =======*/

if(navClose)
{
    navClose.addEventListener('click',() => 
    {
        navMenu.classList.remove("show-menu")
    })
}




/*=============== Portfolio item filter ===============*/
const filterContainer = document.querySelector(".portfolio-filter-inner"),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length,
      portfolioItems = document.querySelectorAll(".portfolio-item"),
      totalPortfolioItem = portfolioItems.length;
      

      for(let i=0; i<totalFilterBtn; i++)
      {
        filterBtns[i].addEventListener("click", function() 
        {
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");
            for(let k=0; k<totalPortfolioItem; k++)
            {
                if(filterValue === portfolioItems[k].getAttribute("data-category"))
                {
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
                else
                {
                    portfolioItems[k].classList.add("hide");
                    portfolioItems[k].classList.remove("show");
                }
                if(filterValue === "all")
                {
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
            }
        })
      }

/*=============== Theme customization ===============*/
const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll(".choose-color span");
var root = document.querySelector(":root");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");
// const bdy = document.querySelector("body");

//open model
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
//close model
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme'))
    {
        themeModal.style.display = 'none';
    }

}
theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal);

/*======= Fonts =======*/


const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active");
    })
}
fontSizes.forEach(size => {
    size.addEventListener('click',() => {

        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1'))
        {
            fontSize = '12px';
        }
        else if(size.classList.contains('font-size-2'))
        {
            fontSize = '14px';
        }
        else if(size.classList.contains('font-size-3'))
        {
            fontSize = '16px';
        }
        else if(size.classList.contains('font-size-4'))
        {
            fontSize = '18px';
        }
        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
})

/*======= Primary colors =======*/

//remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}
 colorPalette.forEach(color => {
     color.addEventListener('click', () => {
        let primaryHue;
        changeActiveColorClass();

         if(color.classList.contains('color-1'))
         {
             primaryHue =252;
         }
         else if(color.classList.contains('color-2'))
         {
             primaryHue =52;
         }
         else if(color.classList.contains('color-3'))
         {
             primaryHue =352;
         }
         else if(color.classList.contains('color-4'))
         {
             primaryHue =152;
         }
         else if(color.classList.contains('color-5'))
         {
             primaryHue =202;
         }
         color.classList.add("active");
         root.style.setProperty('--primary-color-hue', primaryHue);
     })
 })

 /*======= Theme backgrounds =======*/
 let lightColorLightness;
 let whiteColorLightness;
 let darkColorLightness;

 //change background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}
 Bg1.addEventListener('click', () => {
    //add active class 
    Bg1.classList.add('active');
    //remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
    //remove customize changes from local storage
    window.location.reload();
 })

 Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class 
    Bg2.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
 })
    Bg3.addEventListener('click', () => {
        // bdy.classList.add('dark');
        
        darkColorLightness = '95%';
        whiteColorLightness = '10%';
        lightColorLightness = '0%';
    
        //add active class 
        Bg3.classList.add('active');
        //remove active class from the others
        Bg2.classList.remove('active');
        Bg1.classList.remove('active');
        changeBG();
 })