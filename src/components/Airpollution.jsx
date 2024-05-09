import React from 'react';

function AirPollution() {
  return (
    <main className="Air-pollution" id="airpollution">
      <section className="intro">
        <h2>About Air Pollution</h2>
        <p>Air pollution is a significant environmental and public health issue affecting communities worldwide. It occurs when harmful substances, such as gases, particulate matter, and biological molecules, are introduced into the atmosphere, often due to human activities and natural processes. These pollutants can have detrimental effects on human health, ecosystems, and the economy.</p>
        <p>Major sources of air pollution include emissions from vehicles, industrial processes, power plants, agricultural activities, and wildfires. Pollutants such as carbon monoxide, sulfur dioxide, nitrogen oxides, ozone, and particulate matter can lead to a range of health problems, including respiratory diseases, cardiovascular issues, and cancer. Vulnerable populations, such as children, the elderly, and individuals with pre-existing health conditions, are particularly at risk.</p>
        <p>Efforts to address air pollution involve regulatory measures, technological advancements, public awareness campaigns, and international cooperation. Strategies include reducing emissions from vehicles and industrial facilities, promoting clean energy sources, improving urban planning and transportation systems, and implementing air quality monitoring and enforcement programs.</p>
      </section>
      <section className="studies">
        <h2>Recent Studies</h2>
        <p>1. <a href="https://www.nature.com/articles/s41586-021-03409-9" target="_blank" rel="noopener noreferrer">Health Effects of Ambient Particulate Matter Pollution</a>: A study published in Nature analyzed the health effects of ambient particulate matter pollution on global mortality. The research found that exposure to fine particulate matter (PM2.5) is a leading environmental risk factor for premature death, with an estimated 8.7 million deaths attributed to PM2.5 pollution in 2019.</p>
        <p>2. <a href="https://pubmed.ncbi.nlm.nih.gov/32763522/" target="_blank" rel="noopener noreferrer">Impact of Air Pollution on Cognitive Function</a>: Researchers investigated the impact of long-term exposure to air pollution on cognitive function in older adults. The study, published in Environmental Research, observed a significant association between higher levels of air pollution, particularly nitrogen dioxide (NO2) and particulate matter (PM10), and accelerated cognitive decline.</p>
        <p>3. <a href="https://www.sciencedirect.com/science/article/pii/S0048969720361404" target="_blank" rel="noopener noreferrer">Economic Costs of Air Pollution in Urban Areas</a>: A study published in Science of the Total Environment assessed the economic costs of air pollution in urban areas. The research estimated the health-related costs of air pollution, including healthcare expenditures and lost productivity, and emphasized the need for comprehensive policies to mitigate the economic burden of poor air quality.</p>
      </section>
      <button id="airpol">Contribute now!</button>
    </main>
  );
}

export default AirPollution;
