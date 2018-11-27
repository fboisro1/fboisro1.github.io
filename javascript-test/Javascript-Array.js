window.onload = ()=>{
    const array = {
       
        numbers:[15, 14, 13, 12, 11, 10, 9, 8 ,7, 6, 5],
        languageNames:['Javascript','HTML','CSS','Java','C#','Python','C/C++'],
        languagePopularity:[
            { 
                languages: 'JavaScript', 
                rank: 1
            },

            {
                languages: 'HTML',
                rank: 2
            },

            {
                languages: 'CSS',
                rank: 3
            },

            {
                languages: 'Java',
                rank: 4
            },

            {
                languages: 'Python',
                rank: 5
            },

            {
                languages: 'C#',
                rank: 6
            },

            {
                languages: 'C++',
                rank: 7
            },

            {
                languages: 'C',
                rank: 8
            }
        ]
    
    
    };

  
    const numbersAction = document.getElementById('numbers-action');
    const languageAction = document.getElementById('language-name-action');
    const languagePopularityAction = document.getElementById('language-popularity-action');
    

    numbersAction.onclick = () => {
        const numbersDisplay = document.getElementById('numbers-display');
        //numbersDisplay.textContent = numbers;
   
        for (let number of array.numbers){
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(number));
            numbersDisplay.appendChild(li);
        }
    };

    languageAction.onclick = () => {
        const languageDisplay = document.getElementById('language-name-display');
        for (let language of array.languageNames){
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(language));
            languageDisplay.appendChild(li);
        }

    };

languagePopularityAction.onclick = () => {
    const languagePopularityDisplay = document.getElementById('language-popularity-display');
    for (let popularityDisplay of array.languagePopularity){
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(popularityDisplay.rank));
        languagePopularityDisplay.appendChild(li);
    }
};



   // const numbersAction = document.getElementById('numbers-action');
   // const languageAction
   // const languagePopularityAction
};