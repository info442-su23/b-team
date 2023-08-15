import React, { useState } from 'react';
import NavBar from './Nav';
import BackButton from './GoBackButton';

export default function CompostBin() {
  const [currentCompost, setCurrentCompost] = useState(1);
  const [imageOnly, setImageOnly] = useState(false);

  const compostImages = [
    '/img/compost-1.png',
    '/img/compost-2.png',
    '/img/compost-3.png',
    '/img/compost-4.png',
    '/img/compost-5.png',
    '/img/compost-6.png',
    '/img/compost-7.png',
    '/img/compost-8.png',
  ];

  const compostImageTexts = [
    'Image 1 Description',
    'Find or buy a plastic bin with a tight-fitting lid about 24 inches tall or taller (it needs a lid to keep the soil moist and to keep critters out). We picked up a 30-gallon plastic storage bin for about $10. We chose a neutral color in hopes that would help it blend in with our backyard, but a dark option may work better for you.  Use a handheld drill to make 8 – 10 small holes in the bottom of the container for airflow, since your organic waste will need oxygen for the composting process to take place. A 3/16″ drill bit or similar works great. Use that same drill bit to make another 8 – 10 small holes in the lid. Remove the lid for now, but once you’ve finished your bin you’ll want to affix it tightly to the top.',
    'Place some dry leaves on the bottom of your compost bin, filling it about 1/8 – 1/4 full. You can think of composting as layers of “browns” (dead leaves, twigs, etc) and “greens” (food waste, grass clippings, etc.), so this steps is the beginning of your brown base.',
    'Place dirt on top of the leaves or newspaper until the container is 1/2 full. Again, we have PLENTY of that around, but you could also buy a bag of basic topsoil if needed. It’s not necessary to have worms in your dirt.',
    'Now to add your “greens!” Place any food scraps or paper products that you’d like to compost! Some great compostable materials are: Fruit and vegetable scraps, Coffee grounds, coffee filters, or tea bags, Eggshells and nutshells, Paper or cardboard, Yard or grass clippings',
    'Give your compost a little stir (very little, in our case) with a shovel or stick, making sure to cover your food scraps with dirt. Canine supervision is optional.',
    'Spray with lukewarm water until moist, but not soaking wet. (Note: too much water can be the culprit if your compost starts to smell). Place the bin in a shady area away from the house (if you live in an apartment or have no backyard you can place your bin on the patio). Be sure that it’s not in full sun or your compost will dry out. We found the perfect spot near our garage where our bin can hide behind some shrubs – inconspicuous and convenient (since we take the garbage and recycling out this way already). Can you spot it? HINT: check the bottom right.',
    'You’ll also want to think through how you’ll collect or separate your compostable waste inside as well (that way you’re not constantly digging through the trash for eggshells or coffee grounds). We wrote about this airtight container we bought to wrangle our food scraps under the sink. It’s tight seal keeps it from smelling between trips to dump it into our bin.',
  ];

  const handleNext = () => {
    setImageOnly(true);
    if (currentCompost === compostImages.length) {
      setImageOnly(false);
    }
    setCurrentCompost((prev) => (prev === 8 ? 1 : prev + 1));
  }

  return (
    <body className='diy-page'>
      <NavBar />
      <a href="#" className="back-arrow">
        <BackButton />
      </a>
      <section className='heading'></section>
      <article id={ imageOnly ? "hidden" : "compost-diy"}>
        <section>
          <section className="energy-points">
            <p>DIY: Compost Bin</p>
            <img className="energy" src="/img/compost.png" alt="compost" />
          </section>
          <p>Source: https://www.younghouselove.com/younghouselovedotcompost/</p>
        </section>
        <section>
          <h1>COMPOST BIN DIY</h1>
          <p>What you need:</p>
          <ul className='compost-list'>
            <li>10 Scoops of Dirt</li>
            <li>1 Plastic Storage Box</li>
            <li>Shovel</li>
            <li>Leaves</li>
            <li>Water</li>
            <li>Drill</li>
            <li>Jar with Lid</li>
          </ul>
        </section>
      </article>
      {imageOnly && (
        <div className="image-container-diy">
          <p className="image-description">{compostImageTexts[currentCompost - 1]}</p>
          <img src={compostImages[currentCompost - 1]} alt={`compost-${currentCompost}`} />

        </div>
      )}
      <button className="next-button-instruction" onClick={ handleNext }>
        Next Step <span className="arrow-right-instruction">&#10148;</span>
      </button>
    </body>
  )
};
