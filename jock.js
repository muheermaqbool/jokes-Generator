let Jokess = [
    "An exercise for people who are out of shape: Begin with a five-pound potato bag in each hand. Extend your arms straight out from your sides, hold them there for a full minute, and then relax. After a few weeks, move up to ten-pound potato bags. Then try 50-pound potato bags, and eventually try to get to where you can lift a 100-pound potato bag in each hand and hold your arms straight for more than a full minute. Once you feel confident at that level, put a potato in each bag. —Beverly Gross",
    "My daughter received this e-mail from a prospective student prior to the start of the semester: “Dear Professor, I wont be able to come to any of your classes or meet for any of the tests. Is this a problem?” —Carol Harper",
    "Scene: With a patient in my medical exam room Me: How old are your kids? Patient: Forty-four and 39 from my wife who passed away, and from my second wife, 15 and 13. Me: That,s quite the age difference! Patient: Well, the older ones didn,t give me any grandkids, so I made my own. —Mria Murillo",
    "The definition of a perfectionist: someone who wants to go from point A to point A+",
    "Traveling through the Midwest, I stopped at an Ohio welcome center to pick up a state map. I found plenty of brochures but no maps. Then I spotted two employees and asked whether they had any. “Sure,” said the first guy. “I,ll get you one.” As he walked to the back, the second guy explained, “We keep them in the storage room. If we leave them out on the counter, people just come in and take them.”",
    "One of my wife,s third graders was wearing a Fitbit watch, which prompted my wife to ask, “Are you tracking your steps?” “No,” said the little girl. “I wear this...",
    "Two guys stole a calendar. They got six months each. —Submitted by Alex Del Bene",
    "Dad always bragged about the gunners on his ship. Once during target practice, an unmanned drone flew past an antiaircraft cruiser. The cruiser opened up, shells furiously flying all around...",
    "During World War II, my father often found himself stuck with KP duty. One day, convinced he could improve things, he told the head cook, “If you give me a...",
    "Here,s my favorite dad joke, with me as the dad: Every Sunday on the way to church, we would have to stop at a railroad crossing. And each time, I,d...",
    "My mother was hard of hearing and wore a hearing aid that she removed at bedtime. My dad would wait till she had put it on her nightstand and say,...",
    "One night, the phone rang, and Dad answered it. On the other end was an obscene phone caller. Dad listened for a few seconds before telling my mother, “It,s for..."


]
let joke = document.getElementById("jokes")
if(joke.innerHTML==""){
    joke.innerHTML="genrate some jokes ⬇"
}
let btn = document.getElementById("btn");
btn.addEventListener("click",Genrate)
function Genrate(){
joke.innerHTML= Jokess[(Math.floor(Math.random()*(Jokess.length)))]
}
