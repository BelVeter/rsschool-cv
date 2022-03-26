# Dmitry Naydenov #
![photo](./pictures/photo.png "Photo")

### Contact details: ###

Channel  | Contact
---------|:--------:
phone    | +48 573 172 900
e-mail   | dmitry.nayd@gmail.com
telegram | @belveter 
Discord  | BelVeter#9280

### About myself: ###
I’m a creative, out of the box thinking man with sound experience in b2b product\project management in FinTech (international banking group).
Also have programming experience in Front & Back development of WEB applications (JavaScript, PHP, MYSQL & HTML+CSS).
Just moved to Poland and currently build my career here.
Currently I study JavaScript at RSS School (stage 1) and I like it :)

### Skills: ###
* HTML & CSS
* Core JavaScript
* JQuery
* Bootstrap
* MySQL
* PHP
* Git & GitHub

### Code example:
```
async function statusAction(e) {

        let data = {};
        data.action = "newstatus";
        data.newStatus = e.target.dataset.newstatus;
        data.delId = document.querySelector('[data-modal="delid"]').value;
        
        let url = 'xxx.php';

        let headers = {
            'Content-type': 'application/json; charset=UTF-8'
        };

        let request = {
            method: 'POST',
            body: JSON.stringify(data),
            headers
        }

        let rez = await fetch(url, request);
        let rezJson = await rez.json();
        let heart = document.querySelector('.cur-action[data-delid="'+rezJson['delId']+'"]');
        
        if(rezJson['newStatus']=='done') {
            heart.classList.add('done');
            heart.classList.remove('fail');
        }
        else if (rezJson['newStatus']=='fail') {
            heart.classList.add('fail');
            heart.classList.remove('done');
        }
        else {
            heart.classList.remove('done');
            heart.classList.remove('fail');
        }
        
        closeModal();
}
```

### experience: ###
- 2009 - 2021 product\project manager for B2B FinTech products (RBI Group International)
- 2018 - now FullStack developer (kids rental service website with embedded CRM & accounting systems ([website](http://www.tiktak.by/index.html "kids rental service")), ([website](https://tik-tak.lt/ "kids rental service 2"))

### Aducation: ###
* 2021: IT-Academy. Course: Project management in IT
* 2020: Agile LAB. Course: Agile methodologies (SCRUM, Kanban)
* 2016 – 2019: State University of Informatics and Radioelectronics (Information systems software development (intensive retraining course))
* 1997 – 2002: State Economic University (banking & finance)

### Portfolio: ###
* ([website](http://www.tiktak.by/portfolio/ "Portfolio Site (training task)"))
* ([website](http://www.tiktak.by/jstr/ "tic-tak-toe"))
* ([website](https://tik-tak.lt/ "Kids rental service LT"))
* ([website](https://staralliancerealty.com/ "Real Estate agency"))

### Languages: ###
- **English:** B2 _(fluent communication skills)_ 
- **Russian:** native 
- **Belorussian:** B2
