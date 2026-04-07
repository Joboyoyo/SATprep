const questions = [
  {
    id: 1,
    category: "Craft and Structure",
    difficulty: "Easy",
    passage: `The following is adapted from a study on urban ecology. Cities, often perceived as concrete jungles devoid of nature, are in fact teeming with biodiversity. Recent studies have shown that urban areas can support a surprising variety of species, from peregrine falcons nesting on skyscrapers to coyotes navigating suburban neighborhoods. However, this urban wildlife faces unique challenges, including habitat fragmentation, pollution, and the constant encroachment of human development. Researchers argue that understanding urban ecosystems is crucial not only for conservation but also for improving the quality of life for city dwellers themselves.`,
    question: "Which choice best describes the main idea of the passage?",
    choices: [
      "A) Cities are inhospitable environments that drive away most wildlife species.",
      "B) Peregrine falcons and coyotes are the most common animals found in cities.",
      "C) Urban areas harbor unexpected biodiversity despite significant environmental challenges.",
      "D) Conservation efforts in cities are more important than those in rural areas."
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"biodiversity","definition":"the variety of life in a particular habitat or ecosystem"},{"word":"habitat fragmentation","definition":"the process by which large habitats are broken into smaller, isolated pieces"}],
    explanation: "The passage states that cities are 'teeming with biodiversity' while also acknowledging 'unique challenges,' making B the best summary of the main idea."
  },
  {
    id: 2,
    category: "Craft and Structure",
    difficulty: "Easy",
    passage: `The following is adapted from a study on urban ecology. Cities, often perceived as concrete jungles devoid of nature, are in fact teeming with biodiversity. Recent studies have shown that urban areas can support a surprising variety of species, from peregrine falcons nesting on skyscrapers to coyotes navigating suburban neighborhoods. However, this urban wildlife faces unique challenges, including habitat fragmentation, pollution, and the constant encroachment of human development. Researchers argue that understanding urban ecosystems is crucial not only for conservation but also for improving the quality of life for city dwellers themselves.`,
    question: "As used in the passage, 'encroachment' most nearly means:",
    choices: [
      "A) gradual intrusion",
      "B) retreat",
      "C) sudden destruction",
      "D) careful planning"
    ],
    correctAnswer: 0,
    vocabWords: [{"word":"encroachment","definition":"gradual intrusion beyond proper or established limits"},{"word":"devoid","definition":"entirely lacking or free from"}],
    explanation: "'Encroachment' means a gradual advance beyond proper limits. In context, human development is slowly intruding into wildlife habitats."
  },
  {
    id: 3,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `In 1848, a railroad construction foreman named Phineas Gage survived a remarkable accident: a large iron rod was driven completely through his skull, destroying much of his left frontal lobe. Although Gage survived and could walk and speak, his personality changed dramatically. Once reliable and well-liked, he became impulsive, irreverent, and unable to stick to plans. His case became one of the first to suggest that the frontal lobes play a critical role in personality and decision-making, fundamentally changing our understanding of brain function.`,
    question: "The author includes details about Gage's personality changes primarily to:",
    choices: [
      "A) argue that brain injuries always lead to personality disorders.",
      "B) suggest that Gage was a difficult person before the accident.",
      "C) illustrate how the accident contributed to scientific understanding of the brain.",
      "D) criticize the safety standards of 19th-century railroad construction."
    ],
    correctAnswer: 2,
    explanation: "The personality changes are presented as evidence that led to new understanding about the frontal lobes' role, supporting choice C."
  },
  {
    id: 4,
    category: "Information and Ideas",
    difficulty: "Easy",
    passage: `In 1848, a railroad construction foreman named Phineas Gage survived a remarkable accident: a large iron rod was driven completely through his skull, destroying much of his left frontal lobe. Although Gage survived and could walk and speak, his personality changed dramatically. Once reliable and well-liked, he became impulsive, irreverent, and unable to stick to plans. His case became one of the first to suggest that the frontal lobes play a critical role in personality and decision-making, fundamentally changing our understanding of brain function.`,
    question: "Based on the passage, which of the following was true about Gage BEFORE the accident?",
    choices: [
      "A) He had difficulty making decisions.",
      "B) He was considered dependable by others.",
      "C) He was impulsive and irreverent.",
      "D) He had a history of brain injuries."
    ],
    correctAnswer: 1,
    explanation: "The passage says he was 'once reliable and well-liked' before the accident, meaning he was considered dependable (B)."
  },
  {
    id: 5,
    category: "Craft and Structure",
    difficulty: "Medium",
    passage: `The debate over whether homework improves academic achievement has persisted for decades. Proponents argue that homework reinforces classroom learning and builds study habits. Critics, however, point to research showing that excessive homework can increase stress, reduce family time, and may not significantly boost performance, particularly for younger students. A 2006 meta-analysis by Harris Cooper found that homework had a positive effect on achievement for high school students but little to no impact for elementary school students. This nuanced finding suggests that a one-size-fits-all homework policy may be misguided.`,
    question: "Which choice best describes the structure of the passage?",
    choices: [
      "A) A historical overview leads to a definitive conclusion about homework policy.",
      "B) A claim is made, and then evidence is presented to refute it entirely.",
      "C) Two opposing viewpoints are presented, followed by research that partially supports each.",
      "D) An anecdote introduces a broader discussion of educational theory."
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"meta-analysis","definition":"a statistical method that combines results from multiple studies"},{"word":"proponents","definition":"people who advocate for or support something"}],
    explanation: "The passage presents pro-homework and anti-homework views, then cites Cooper's research which supports homework for older but not younger students — partially supporting each side (C)."
  },
  {
    id: 6,
    category: "Craft and Structure",
    difficulty: "Easy",
    passage: `The debate over whether homework improves academic achievement has persisted for decades. Proponents argue that homework reinforces classroom learning and builds study habits. Critics, however, point to research showing that excessive homework can increase stress, reduce family time, and may not significantly boost performance, particularly for younger students. A 2006 meta-analysis by Harris Cooper found that homework had a positive effect on achievement for high school students but little to no impact for elementary school students. This nuanced finding suggests that a one-size-fits-all homework policy may be misguided.`,
    question: "The word 'nuanced' in the final sentence most nearly means:",
    choices: [
      "A) subtle and complex",
      "B) biased",
      "C) controversial",
      "D) widely accepted"
    ],
    correctAnswer: 0,
    vocabWords: [{"word":"nuanced","definition":"characterized by subtle shades of meaning or expression"}],
    explanation: "'Nuanced' means showing subtle distinctions. Cooper's finding is complex because homework helps some age groups but not others."
  },
  {
    id: 7,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `Water scarcity is projected to affect nearly two-thirds of the world's population by 2025. While technological solutions like desalination and wastewater recycling show promise, they remain expensive and energy-intensive. Some experts advocate for a simpler approach: reducing water waste. In many cities, aging infrastructure causes significant water loss through leaking pipes — in some systems, up to 30% of treated water never reaches consumers. Fixing these leaks, while less glamorous than high-tech solutions, could dramatically improve water availability at a fraction of the cost.`,
    question: "The author's attitude toward fixing leaking pipes can best be described as:",
    choices: [
      "A) dismissive, because it is not a technological innovation.",
      "B) supportive, because it is a practical and cost-effective solution.",
      "C) neutral, presenting it as one of many equally viable options.",
      "D) skeptical, because the cost would be prohibitive."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"desalination","definition":"the process of removing salt from seawater to make it drinkable"},{"word":"infrastructure","definition":"the basic physical systems of a society (roads, bridges, pipes, etc.)"}],
    explanation: "The author says fixing leaks 'could dramatically improve water availability at a fraction of the cost,' clearly supporting this approach as practical (B)."
  },
  {
    id: 8,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `Water scarcity is projected to affect nearly two-thirds of the world's population by 2025. While technological solutions like desalination and wastewater recycling show promise, they remain expensive and energy-intensive. Some experts advocate for a simpler approach: reducing water waste. In many cities, aging infrastructure causes significant water loss through leaking pipes — in some systems, up to 30% of treated water never reaches consumers. Fixing these leaks, while less glamorous than high-tech solutions, could dramatically improve water availability at a fraction of the cost.`,
    question: "The passage implies that desalination is:",
    choices: [
      "A) the most effective solution to water scarcity.",
      "B) cheaper than fixing aging infrastructure.",
      "C) a promising but resource-demanding technology.",
      "D) already widely implemented in most cities."
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"energy-intensive","definition":"requiring a large amount of energy to produce or operate"}],
    explanation: "The passage says desalination 'shows promise' but is 'expensive and energy-intensive,' making D the best inference."
  },
  {
    id: 9,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `For centuries, the library of Alexandria was considered the greatest repository of knowledge in the ancient world. Founded in the 3rd century BCE, it attracted scholars from across the Mediterranean and housed hundreds of thousands of scrolls. Its destruction — the precise cause and timing of which remain debated — has come to symbolize the tragic loss of knowledge. Some historians attribute the destruction to Julius Caesar's fire in 48 BCE, while others point to later events, including the decree of Emperor Theodosius in 391 CE. What is clear is that no single catastrophic event destroyed the library; rather, it declined gradually over centuries of political turmoil and neglect.`,
    question: "According to the passage, what is the most accurate statement about the library's destruction?",
    choices: [
      "A) Julius Caesar was solely responsible for burning the library.",
      "B) The library's decline was a gradual process rather than a single event.",
      "C) Historians agree on when and how the library was destroyed.",
      "D) Emperor Theodosius ordered the library's complete destruction."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"repository","definition":"a place where things are stored in large quantities"},{"word":"catastrophic","definition":"involving or causing sudden great damage or suffering"}],
    explanation: "The final sentence explicitly states 'no single catastrophic event destroyed the library; rather, it declined gradually,' supporting D."
  },
  {
    id: 10,
    category: "Craft and Structure",
    difficulty: "Easy",
    passage: `For centuries, the library of Alexandria was considered the greatest repository of knowledge in the ancient world. Founded in the 3rd century BCE, it attracted scholars from across the Mediterranean and housed hundreds of thousands of scrolls. Its destruction — the precise cause and timing of which remain debated — has come to symbolize the tragic loss of knowledge. Some historians attribute the destruction to Julius Caesar's fire in 48 BCE, while others point to later events, including the decree of Emperor Theodosius in 391 CE. What is clear is that no single catastrophic event destroyed the library; rather, it declined gradually over centuries of political turmoil and neglect.`,
    question: "The phrase 'repository of knowledge' most nearly means:",
    choices: [
      "A) a school for training scholars",
      "B) a marketplace for selling books",
      "C) a place where information is stored",
      "D) a government building"
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"repository","definition":"a place where things are stored or deposited"}],
    explanation: "A 'repository' is a place where things are stored or deposited. In context, the library stored scrolls containing knowledge (C)."
  },
  {
    id: 11,
    category: "Craft and Structure",
    difficulty: "Medium",
    passage: `The concept of \"emotional intelligence\" — the ability to recognize, understand, and manage one's own emotions and those of others — was popularized by psychologist Daniel Goleman in his 1995 book. Goleman argued that emotional intelligence, or EQ, could be more important than traditional IQ in determining success in life and work. While some researchers have supported this claim, others have questioned the scientific rigor of EQ measurements and whether emotional intelligence is truly distinct from personality traits. Despite this debate, the concept has had an enormous influence on education and corporate training.`,
    question: "The primary purpose of the passage is to:",
    choices: [
      "A) prove that emotional intelligence is more important than IQ.",
      "B) argue that emotional intelligence research lacks scientific validity.",
      "C) provide an overview of emotional intelligence and the debate surrounding it.",
      "D) explain how emotional intelligence is measured."
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"emotional intelligence","definition":"the ability to recognize, understand, and manage emotions"},{"word":"rigor","definition":"the quality of being extremely thorough and careful"}],
    explanation: "The passage introduces EQ, presents Goleman's claims, notes criticism, and mentions its influence — an overview with both sides of the debate (C)."
  },
  {
    id: 12,
    category: "Expression of Ideas",
    difficulty: "Hard",
    passage: `The concept of \"emotional intelligence\" — the ability to recognize, understand, and manage one's own emotions and those of others — was popularized by psychologist Daniel Goleman in his 1995 book. Goleman argued that emotional intelligence, or EQ, could be more important than traditional IQ in determining success in life and work. While some researchers have supported this claim, others have questioned the scientific rigor of EQ measurements and whether emotional intelligence is truly distinct from personality traits. Despite this debate, the concept has had an enormous influence on education and corporate training.`,
    question: "Which of the following, if true, would most weaken Goleman's argument?",
    choices: [
      "A) Goleman's book sold millions of copies worldwide.",
      "B) Many successful CEOs score high on emotional intelligence tests.",
      "C) Emotional intelligence training programs have become popular in schools.",
      "D) Studies show that EQ scores are strongly correlated with existing personality assessments and do not predict outcomes beyond what IQ already predicts."
    ],
    correctAnswer: 3,
    explanation: "If EQ overlaps with personality and doesn't predict beyond IQ, it undermines Goleman's claim that EQ is distinctly more important than IQ (D)."
  },
  {
    id: 13,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `When Marie Curie began her doctoral research in Paris in the 1890s, she chose to investigate a curious phenomenon recently discovered by Henri Becquerel: certain uranium compounds emitted rays that could fog a photographic plate. Curie hypothesized that this \"radioactivity\" — a term she coined — was an atomic property rather than a chemical one. Through painstaking experimentation, she and her husband Pierre isolated two new elements, polonium and radium, from tons of pitchblende ore. Her work earned her two Nobel Prizes and fundamentally altered our understanding of the atom, though the health consequences of prolonged radiation exposure would only become apparent years later.`,
    question: "The passage suggests that Curie's hypothesis about radioactivity was significant because it:",
    choices: [
      "A) led directly to the development of nuclear weapons.",
      "B) proved that Becquerel's earlier discovery was incorrect.",
      "C) shifted the understanding of radioactivity from a chemical to an atomic phenomenon.",
      "D) was the first scientific hypothesis ever tested by a woman."
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"radioactivity","definition":"the emission of ionizing radiation by unstable atomic nuclei"},{"word":"pitchblende","definition":"a mineral that is the main ore of uranium"}],
    explanation: "Curie hypothesized radioactivity was 'an atomic property rather than a chemical one,' which was a fundamental shift in understanding (C)."
  },
  {
    id: 14,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `When Marie Curie began her doctoral research in Paris in the 1890s, she chose to investigate a curious phenomenon recently discovered by Henri Becquerel: certain uranium compounds emitted rays that could fog a photographic plate. Curie hypothesized that this \"radioactivity\" — a term she coined — was an atomic property rather than a chemical one. Through painstaking experimentation, she and her husband Pierre isolated two new elements, polonium and radium, from tons of pitchblende ore. Her work earned her two Nobel Prizes and fundamentally altered our understanding of the atom, though the health consequences of prolonged radiation exposure would only become apparent years later.`,
    question: "The final clause of the passage ('though the health consequences...') serves to:",
    choices: [
      "A) diminish the importance of Curie's scientific achievements.",
      "B) add an ironic or poignant dimension to her accomplishments.",
      "C) argue that radiation research should have been banned.",
      "D) suggest that Curie was reckless in her research methods."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"painstaking","definition":"done with or employing great care and thoroughness"}],
    explanation: "The clause adds poignancy by noting that the very phenomenon Curie studied ultimately harmed her health — ironic given her groundbreaking success (B)."
  },
  {
    id: 15,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `Social media platforms have transformed how people consume news. A recent survey found that 55% of American adults get news from social media at least sometimes. While this increases access to information, it also raises concerns about misinformation. Unlike traditional news outlets, social media platforms use algorithms that prioritize engagement over accuracy, often amplifying sensational or misleading content. Furthermore, the echo chamber effect — where users are primarily exposed to viewpoints that reinforce their existing beliefs — can deepen political polarization and reduce exposure to diverse perspectives.`,
    question: "Based on the passage, the 'echo chamber effect' most directly contributes to:",
    choices: [
      "A) increased engagement on social media platforms.",
      "B) better-informed citizens.",
      "C) deeper political divisions among people.",
      "D) more accurate news reporting."
    ],
    correctAnswer: 2,
    explanation: "The passage explicitly states the echo chamber effect 'can deepen political polarization,' which means deeper political divisions (C)."
  },
  {
    id: 16,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `Social media platforms have transformed how people consume news. A recent survey found that 55% of American adults get news from social media at least sometimes. While this increases access to information, it also raises concerns about misinformation. Unlike traditional news outlets, social media platforms use algorithms that prioritize engagement over accuracy, often amplifying sensational or misleading content. Furthermore, the echo chamber effect — where users are primarily exposed to viewpoints that reinforce their existing beliefs — can deepen political polarization and reduce exposure to diverse perspectives.`,
    question: "The passage draws a contrast between social media and traditional news outlets primarily in terms of:",
    choices: [
      "A) their audience size.",
      "B) the political leanings of their journalists.",
      "C) how much they charge for subscriptions.",
      "D) what their content distribution systems prioritize."
    ],
    correctAnswer: 3,
    explanation: "The key contrast is that social media algorithms 'prioritize engagement over accuracy' unlike traditional outlets, a difference in content distribution priorities (D)."
  },
  {
    id: 17,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `Deep in the Mariana Trench, nearly 11 kilometers below the ocean's surface, scientists have discovered thriving communities of microorganisms. These extremophiles survive in conditions of crushing pressure, near-freezing temperatures, and complete darkness. They derive energy not from sunlight, as most life on Earth does, but from chemical reactions involving hydrogen and sulfur compounds seeping from the ocean floor. The discovery of these organisms has profound implications for the search for extraterrestrial life, suggesting that life could exist on other planets or moons where conditions were previously deemed too harsh — such as beneath the icy surface of Jupiter's moon Europa.`,
    question: "The author mentions Europa primarily to:",
    choices: [
      "A) provide an example of where extremophile-like life might be found beyond Earth.",
      "B) suggest that NASA should prioritize missions to Europa.",
      "C) compare the Mariana Trench to conditions on Jupiter.",
      "D) argue that life definitely exists on Jupiter's moons."
    ],
    correctAnswer: 0,
    vocabWords: [{"word":"extremophiles","definition":"organisms that thrive in physically or chemically extreme conditions"},{"word":"extraterrestrial","definition":"of or from outside the earth or its atmosphere"}],
    explanation: "Europa is mentioned as an example of a place where life 'could exist' given what we've learned from deep-sea extremophiles (A)."
  },
  {
    id: 18,
    category: "Information and Ideas",
    difficulty: "Easy",
    passage: `Deep in the Mariana Trench, nearly 11 kilometers below the ocean's surface, scientists have discovered thriving communities of microorganisms. These extremophiles survive in conditions of crushing pressure, near-freezing temperatures, and complete darkness. They derive energy not from sunlight, as most life on Earth does, but from chemical reactions involving hydrogen and sulfur compounds seeping from the ocean floor. The discovery of these organisms has profound implications for the search for extraterrestrial life, suggesting that life could exist on other planets or moons where conditions were previously deemed too harsh — such as beneath the icy surface of Jupiter's moon Europa.`,
    question: "According to the passage, extremophiles differ from most life on Earth in that they:",
    choices: [
      "A) live in warm, shallow waters.",
      "B) require oxygen to survive.",
      "C) can survive in sunlight.",
      "D) obtain energy from chemical reactions rather than sunlight."
    ],
    correctAnswer: 3,
    explanation: "The passage states they 'derive energy not from sunlight... but from chemical reactions,' which is what sets them apart (D)."
  },
  {
    id: 19,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `The practice of \"redlining\" — in which banks and insurance companies refused services to residents of predominantly Black neighborhoods — was officially outlawed by the Fair Housing Act of 1968. However, its effects persist today. Studies show that formerly redlined neighborhoods continue to have lower property values, fewer trees, higher temperatures, and worse health outcomes than nearby non-redlined areas. These disparities are not coincidental; decades of disinvestment created a cycle of poverty and environmental degradation that has proven extremely difficult to reverse. Understanding redlining's legacy is essential for addressing the racial wealth gap that remains one of America's most persistent inequalities.`,
    question: "The author would most likely agree with which of the following statements?",
    choices: [
      "A) The Fair Housing Act successfully eliminated the effects of redlining.",
      "B) Environmental conditions play no role in economic inequality.",
      "C) Property values in formerly redlined areas have fully recovered since 1968.",
      "D) The current racial wealth gap is partially rooted in historical housing discrimination."
    ],
    correctAnswer: 3,
    vocabWords: [{"word":"redlining","definition":"the discriminatory practice of denying services to residents of certain areas based on race"},{"word":"disinvestment","definition":"the withdrawal or withholding of financial resources"}],
    explanation: "The passage directly links redlining's legacy to 'the racial wealth gap,' and calls understanding this essential, supporting B."
  },
  {
    id: 20,
    category: "Expression of Ideas",
    difficulty: "Easy",
    passage: `The practice of \"redlining\" — in which banks and insurance companies refused services to residents of predominantly Black neighborhoods — was officially outlawed by the Fair Housing Act of 1968. However, its effects persist today. Studies show that formerly redlined neighborhoods continue to have lower property values, fewer trees, higher temperatures, and worse health outcomes than nearby non-redlined areas. These disparities are not coincidental; decades of disinvestment created a cycle of poverty and environmental degradation that has proven extremely difficult to reverse. Understanding redlining's legacy is essential for addressing the racial wealth gap that remains one of America's most persistent inequalities.`,
    question: "As used in the passage, 'disinvestment' most nearly means:",
    choices: [
      "A) excessive government spending",
      "B) foreign investment in domestic markets",
      "C) the withdrawal or withholding of financial resources",
      "D) private charitable donations"
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"disinvestment","definition":"the withdrawal or withholding of financial resources"},{"word":"disparities","definition":"great differences or inequalities"}],
    explanation: "'Disinvestment' refers to the withdrawal of investment. In context, redlined neighborhoods were denied financial services, meaning resources were withheld (C)."
  },
  {
    id: 21,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `A growing body of research suggests that bilingualism provides cognitive benefits beyond the ability to speak two languages. Bilingual individuals often outperform monolinguals on tasks requiring attention control, cognitive flexibility, and conflict resolution. Some studies suggest that managing two language systems strengthens executive function — the brain's ability to plan, focus, and juggle multiple tasks. Perhaps most intriguing, research indicates that bilingualism may delay the onset of dementia by several years. However, critics note that many of these studies suffer from methodological limitations, including small sample sizes and difficulty controlling for socioeconomic factors.`,
    question: "The passage presents bilingualism research as:",
    choices: [
      "A) conclusive and universally accepted.",
      "B) relevant only to elderly populations.",
      "C) entirely discredited by recent findings.",
      "D) promising but subject to valid methodological concerns."
    ],
    correctAnswer: 3,
    vocabWords: [{"word":"cognitive flexibility","definition":"the mental ability to switch between thinking about different concepts"},{"word":"dementia","definition":"a chronic condition of deteriorating mental processes"}],
    explanation: "The passage describes cognitive benefits ('promising') but notes 'methodological limitations' from critics, making D the most accurate characterization."
  },
  {
    id: 22,
    category: "Expression of Ideas",
    difficulty: "Easy",
    passage: `A growing body of research suggests that bilingualism provides cognitive benefits beyond the ability to speak two languages. Bilingual individuals often outperform monolinguals on tasks requiring attention control, cognitive flexibility, and conflict resolution. Some studies suggest that managing two language systems strengthens executive function — the brain's ability to plan, focus, and juggle multiple tasks. Perhaps most intriguing, research indicates that bilingualism may delay the onset of dementia by several years. However, critics note that many of these studies suffer from methodological limitations, including small sample sizes and difficulty controlling for socioeconomic factors.`,
    question: "According to the passage, executive function involves the ability to:",
    choices: [
      "A) speak multiple languages fluently.",
      "B) memorize large amounts of vocabulary.",
      "C) plan, focus, and manage multiple tasks.",
      "D) resolve interpersonal conflicts."
    ],
    correctAnswer: 2,
    explanation: "The passage defines executive function as 'the brain's ability to plan, focus, and juggle multiple tasks' (C)."
  },
  {
    id: 23,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `In recent years, the concept of \"food deserts\" — urban areas where residents lack access to affordable, nutritious food — has gained widespread attention. However, some researchers argue that the term oversimplifies the problem. Access to a grocery store does not guarantee healthy eating; factors such as food literacy, cooking skills, time constraints, and cultural preferences also play significant roles. Moreover, studies that introduced new supermarkets into food deserts found little change in residents' dietary habits. This has led some scholars to prefer the term \"food apartheid,\" which emphasizes the systemic racism and economic inequality that shape food access rather than simply the geographic availability of stores.`,
    question: "The passage suggests that introducing supermarkets to food deserts:",
    choices: [
      "A) is opposed by most food policy researchers.",
      "B) completely solves the problem of unhealthy eating in those areas.",
      "C) is too expensive to be a practical solution.",
      "D) has been shown to have limited impact on residents' actual diets."
    ],
    correctAnswer: 3,
    vocabWords: [{"word":"food literacy","definition":"the understanding of the impact of food choices on health and environment"}],
    explanation: "The passage states that studies 'found little change in residents' dietary habits' when new supermarkets were introduced (D)."
  },
  {
    id: 24,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `In recent years, the concept of \"food deserts\" — urban areas where residents lack access to affordable, nutritious food — has gained widespread attention. However, some researchers argue that the term oversimplifies the problem. Access to a grocery store does not guarantee healthy eating; factors such as food literacy, cooking skills, time constraints, and cultural preferences also play significant roles. Moreover, studies that introduced new supermarkets into food deserts found little change in residents' dietary habits. This has led some scholars to prefer the term \"food apartheid,\" which emphasizes the systemic racism and economic inequality that shape food access rather than simply the geographic availability of stores.`,
    question: "The term 'food apartheid' is preferred by some scholars because it:",
    choices: [
      "A) highlights systemic social factors rather than just physical proximity to stores.",
      "B) is a more scientifically precise measurement of food access.",
      "C) sounds more alarming and attracts media attention.",
      "D) was coined by residents of affected communities."
    ],
    correctAnswer: 0,
    vocabWords: [{"word":"apartheid","definition":"a system of institutionalized racial segregation and discrimination"}],
    explanation: "The passage says 'food apartheid' emphasizes 'systemic racism and economic inequality' rather than 'geographic availability,' making A correct."
  },
  {
    id: 25,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `The rise of artificial intelligence in healthcare has generated both excitement and apprehension. AI systems can now analyze medical images with accuracy rivaling that of experienced radiologists, identify potential drug interactions, and predict patient outcomes. Proponents see AI as a tool that could reduce diagnostic errors, which account for an estimated 10% of patient deaths, and make expert-level care more accessible. Skeptics, however, worry about algorithmic bias — if AI systems are trained on data that underrepresents certain populations, they may perform poorly for those groups. Additionally, questions remain about liability when an AI system makes an error that harms a patient.`,
    question: "Which of the following best describes the author's approach to the topic?",
    choices: [
      "A) Enthusiastically advocating for immediate AI adoption in all hospitals.",
      "B) Arguing that AI should never be used in medical decision-making.",
      "C) Presenting both potential benefits and legitimate concerns about AI in healthcare.",
      "D) Comparing AI performance across different medical specialties."
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"algorithmic bias","definition":"systematic errors in computer systems that create unfair outcomes"},{"word":"apprehension","definition":"anxiety or fear about the future"}],
    explanation: "The passage balances 'excitement' (benefits like reducing errors) with 'apprehension' (concerns like bias and liability), making B the best description."
  },
  {
    id: 26,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `The rise of artificial intelligence in healthcare has generated both excitement and apprehension. AI systems can now analyze medical images with accuracy rivaling that of experienced radiologists, identify potential drug interactions, and predict patient outcomes. Proponents see AI as a tool that could reduce diagnostic errors, which account for an estimated 10% of patient deaths, and make expert-level care more accessible. Skeptics, however, worry about algorithmic bias — if AI systems are trained on data that underrepresents certain populations, they may perform poorly for those groups. Additionally, questions remain about liability when an AI system makes an error that harms a patient.`,
    question: "The passage indicates that algorithmic bias in healthcare AI could result from:",
    choices: [
      "A) AI systems being too expensive for widespread use.",
      "B) patients not trusting computer-generated diagnoses.",
      "C) radiologists refusing to adopt new technology.",
      "D) training data that does not adequately represent all patient populations."
    ],
    correctAnswer: 3,
    explanation: "The passage states bias occurs 'if AI systems are trained on data that underrepresents certain populations' (D)."
  },
  {
    id: 27,
    category: "Craft and Structure",
    difficulty: "Medium",
    passage: `The Japanese concept of \"wabi-sabi\" embraces imperfection, impermanence, and incompleteness as sources of beauty. A cracked teacup repaired with gold — the art of kintsugi — exemplifies this philosophy, treating damage not as something to hide but as part of an object's history to be celebrated. In Western aesthetics, beauty has traditionally been associated with symmetry, proportion, and permanence. The growing Western interest in wabi-sabi may reflect a cultural shift away from the pursuit of perfection and toward acceptance of life's transient, imperfect nature. This cross-cultural exchange suggests that aesthetic values, far from being universal, are culturally constructed and constantly evolving.`,
    question: "The author uses the example of kintsugi to:",
    choices: [
      "A) argue that Japanese art is superior to Western art.",
      "B) provide a concrete illustration of wabi-sabi philosophy.",
      "C) explain the technical process of repairing broken pottery.",
      "D) criticize Western obsession with material possessions."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"wabi-sabi","definition":"a Japanese aesthetic centered on acceptance of imperfection and transience"},{"word":"kintsugi","definition":"the Japanese art of repairing broken pottery with gold"}],
    explanation: "Kintsugi is presented as an example ('exemplifies') that makes the abstract concept of wabi-sabi concrete and understandable (B)."
  },
  {
    id: 28,
    category: "Craft and Structure",
    difficulty: "Medium",
    passage: `The Japanese concept of \"wabi-sabi\" embraces imperfection, impermanence, and incompleteness as sources of beauty. A cracked teacup repaired with gold — the art of kintsugi — exemplifies this philosophy, treating damage not as something to hide but as part of an object's history to be celebrated. In Western aesthetics, beauty has traditionally been associated with symmetry, proportion, and permanence. The growing Western interest in wabi-sabi may reflect a cultural shift away from the pursuit of perfection and toward acceptance of life's transient, imperfect nature. This cross-cultural exchange suggests that aesthetic values, far from being universal, are culturally constructed and constantly evolving.`,
    question: "The final sentence of the passage implies that:",
    choices: [
      "A) ideas about beauty are shaped by culture and can change over time.",
      "B) Western and Japanese aesthetics are fundamentally incompatible.",
      "C) wabi-sabi will eventually replace Western aesthetic standards.",
      "D) all cultures share the same definition of beauty."
    ],
    correctAnswer: 0,
    vocabWords: [{"word":"aesthetic","definition":"concerned with beauty or the appreciation of beauty"},{"word":"transient","definition":"lasting only for a short time; not permanent"}],
    explanation: "The final sentence says aesthetic values are 'culturally constructed and constantly evolving,' meaning they are shaped by culture and changeable (A)."
  },
  {
    id: 29,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `Sleep deprivation has emerged as a significant public health concern. The Centers for Disease Control and Prevention estimates that one-third of American adults regularly get less than the recommended seven hours of sleep per night. The consequences extend far beyond daytime drowsiness: chronic sleep deprivation is linked to increased risks of obesity, diabetes, cardiovascular disease, and depression. Economic impacts are substantial as well, with sleep-deprived workers costing the U.S. economy an estimated $411 billion annually in lost productivity. Despite these well-documented risks, cultural attitudes that celebrate overwork and view sleep as laziness persist, particularly in professional settings.`,
    question: "The author mentions the $411 billion figure primarily to:",
    choices: [
      "A) suggest that sleep deprivation is only an economic problem.",
      "B) argue that workers should be paid more to compensate for lost sleep.",
      "C) quantify the broader societal impact of insufficient sleep.",
      "D) compare the U.S. economy with other countries' productivity."
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"cardiovascular","definition":"relating to the heart and blood vessels"}],
    explanation: "The economic figure adds another dimension to the impact of sleep deprivation, quantifying the societal cost beyond health effects (C)."
  },
  {
    id: 30,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `Sleep deprivation has emerged as a significant public health concern. The Centers for Disease Control and Prevention estimates that one-third of American adults regularly get less than the recommended seven hours of sleep per night. The consequences extend far beyond daytime drowsiness: chronic sleep deprivation is linked to increased risks of obesity, diabetes, cardiovascular disease, and depression. Economic impacts are substantial as well, with sleep-deprived workers costing the U.S. economy an estimated $411 billion annually in lost productivity. Despite these well-documented risks, cultural attitudes that celebrate overwork and view sleep as laziness persist, particularly in professional settings.`,
    question: "The passage implies that a major barrier to addressing sleep deprivation is:",
    choices: [
      "A) a lack of scientific research on sleep.",
      "B) the high cost of sleep medication.",
      "C) disagreement among doctors about how much sleep is needed.",
      "D) cultural attitudes that undervalue sleep."
    ],
    correctAnswer: 3,
    vocabWords: [{"word":"chronic","definition":"persisting for a long time or constantly recurring"}],
    explanation: "The final sentence identifies 'cultural attitudes that celebrate overwork and view sleep as laziness' as a persisting barrier (D)."
  },

  // ========== STANDARD ENGLISH CONVENTIONS (Grammar, Punctuation, Verb Forms) ==========
  {
    id: 31,
    category: "Standard English Conventions",
    difficulty: "Easy",
    passage: `The archaeologist carefully cataloged each artifact. The pottery shards, which _______ from the late Bronze Age, provided crucial evidence about ancient trade routes between Mediterranean civilizations.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) dates",
      "B) dating",
      "C) date",
      "D) dated"
    ],
    correctAnswer: 3,
    explanation: "The relative clause 'which ______ from the late Bronze Age' needs a past tense verb to match the past tense narrative. 'Dated' (D) is correct."
  },
  {
    id: 32,
    category: "Standard English Conventions",
    difficulty: "Easy",
    passage: `The city council approved a new ordinance requiring all commercial buildings to install solar panels by 2030. _______ the mayor praised the initiative as a bold step toward carbon neutrality, several business owners expressed concern about the financial burden.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) Unless",
      "B) While",
      "C) Because",
      "D) Since"
    ],
    correctAnswer: 1,
    explanation: "'While' (B) correctly establishes a contrast between the mayor's praise and the business owners' concerns. 'Since' and 'Because' imply causation, and 'Unless' implies a condition — none of which fits the contrast here."
  },
  {
    id: 33,
    category: "Standard English Conventions",
    difficulty: "Easy",
    passage: `Renowned for _______ innovative use of color and light, the Impressionist painters of the late 19th century challenged the academic traditions that had dominated European art for centuries.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) its",
      "B) there",
      "C) they're",
      "D) their"
    ],
    correctAnswer: 3,
    vocabWords: [{"word":"Impressionist","definition":"relating to a 19th-century art movement emphasizing light and color"}],
    explanation: "'Their' (D) is the correct possessive pronoun referring to 'the Impressionist painters' (plural). 'They're' means 'they are,' 'there' is a location word, and 'its' is singular."
  },
  {
    id: 34,
    category: "Standard English Conventions",
    difficulty: "Medium",
    passage: `The research team submitted its findings to the peer-reviewed _______ the results were published within three months, generating significant interest from the scientific community.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) journal; and",
      "B) journal and",
      "C) journal, and",
      "D) journal"
    ],
    correctAnswer: 2,
    explanation: "Two independent clauses joined by a coordinating conjunction ('and') require a comma before the conjunction. 'Journal, and' (C) is correct."
  },
  {
    id: 35,
    category: "Standard English Conventions",
    difficulty: "Medium",
    passage: `Neither the professor nor her graduate students _______ able to replicate the results of the controversial study, casting doubt on the original researchers' methodology.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) were",
      "B) was",
      "C) is",
      "D) has been"
    ],
    correctAnswer: 0,
    explanation: "With 'neither...nor,' the verb agrees with the nearer subject. 'Her graduate students' is plural and nearest, so 'were' (A) is correct. The past tense also matches the context."
  },
  {
    id: 36,
    category: "Standard English Conventions",
    difficulty: "Medium",
    passage: `The novelist's latest _______ which spans three generations of an immigrant family, has been praised by critics for its nuanced portrayal of cultural identity and the immigrant experience in America.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) work, which",
      "B) work which",
      "C) work—which",
      "D) work; which"
    ],
    correctAnswer: 0,
    explanation: "A nonrestrictive (nonessential) relative clause must be set off by commas. 'Work, which' (A) correctly uses a comma before the relative clause. A semicolon cannot introduce a dependent clause."
  },
  {
    id: 37,
    category: "Standard English Conventions",
    difficulty: "Easy",
    passage: `By the time the emergency responders arrived at the _______ the floodwaters had already receded, leaving behind a thick layer of mud and debris.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) scene",
      "B) scene;",
      "C) scene:",
      "D) scene,"
    ],
    correctAnswer: 3,
    explanation: "A comma (A) is needed after 'scene' to complete the introductory clause 'By the time the emergency responders arrived at the scene.' A colon or semicolon would be incorrect here."
  },
  {
    id: 38,
    category: "Standard English Conventions",
    difficulty: "Hard",
    passage: `The committee's report recommended that the school district _______ its curriculum to include more hands-on learning experiences and project-based assessments.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) will revise",
      "B) revise",
      "C) revises",
      "D) would have revised"
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"subjunctive","definition":"a verb mood used to express wishes, demands, or hypothetical situations"}],
    explanation: "After 'recommended that,' the subjunctive mood requires the base form of the verb. 'Revise' (B) is the correct subjunctive form, regardless of the subject."
  },
  {
    id: 39,
    category: "Standard English Conventions",
    difficulty: "Medium",
    passage: `The marathon runner, exhausted after 26 miles of grueling _______ collapsed at the finish line and was immediately attended to by medical personnel.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) competition,",
      "B) competition",
      "C) competition;",
      "D) competition."
    ],
    correctAnswer: 0,
    explanation: "The phrase 'exhausted after 26 miles of grueling competition' is a parenthetical appositive set off by commas. The opening comma appears after 'runner,' so a closing comma (D) is needed after 'competition.'"
  },
  {
    id: 40,
    category: "Standard English Conventions",
    difficulty: "Medium",
    passage: `Each of the paintings in the _______ collection represents a different period in the artist's career, from her early abstract works to her later photorealistic portraits.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) museums",
      "B) museum's",
      "C) museums'",
      "D) museums's"
    ],
    correctAnswer: 1,
    explanation: "The singular possessive 'museum's' (B) is correct because the passage refers to one museum's collection. 'Museums' is plural without possession, 'museums'' is plural possessive, and 'museums's' is nonstandard."
  },

  // ========== TRANSITIONS ==========
  {
    id: 41,
    category: "Transitions",
    difficulty: "Easy",
    passage: `Coral reefs support approximately 25% of all marine species despite covering less than 1% of the ocean floor. _______ reefs are extremely sensitive to changes in water temperature, with even a 1-2 degree Celsius increase causing widespread coral bleaching.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) However,",
      "B) In other words,",
      "C) Similarly,",
      "D) For example,"
    ],
    correctAnswer: 0,
    vocabWords: [{"word":"coral bleaching","definition":"the whitening of coral due to stress from temperature changes"}],
    explanation: "'However' (A) signals a contrast between the ecological importance of reefs and their vulnerability. The first sentence highlights their value; the second introduces a threat."
  },
  {
    id: 42,
    category: "Transitions",
    difficulty: "Medium",
    passage: `The study found that students who took handwritten notes performed significantly better on conceptual questions than those who typed their notes on laptops. _______ typing allows students to transcribe lectures nearly verbatim, handwriting forces deeper processing because students must summarize and paraphrase in real time.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) Nevertheless,",
      "B) In addition,",
      "C) For instance,",
      "D) This is because while"
    ],
    correctAnswer: 3,
    explanation: "'This is because while' (D) introduces a causal explanation with a built-in contrast — explaining why handwriting outperforms typing by contrasting the two methods."
  },
  {
    id: 43,
    category: "Transitions",
    difficulty: "Medium",
    passage: `Astronomers initially believed that the universe's expansion was slowing down due to gravitational attraction between galaxies. _______ observations of distant supernovae in the late 1990s revealed that the expansion is actually accelerating, a discovery that led to the concept of dark energy.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) On the contrary,",
      "B) Specifically,",
      "C) Consequently,",
      "D) Likewise,"
    ],
    correctAnswer: 0,
    vocabWords: [{"word":"supernovae","definition":"massive explosions of dying stars (plural of supernova)"}],
    explanation: "'On the contrary' (A) signals that the observations directly contradicted the initial belief — the expansion was accelerating, not slowing."
  },
  {
    id: 44,
    category: "Transitions",
    difficulty: "Easy",
    passage: `The city invested heavily in expanding its bus routes and adding dedicated bus lanes. _______ ridership on public transit increased by 18% in the first year, while single-occupancy car trips declined by nearly 10%.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) Nevertheless,",
      "B) In contrast,",
      "C) Meanwhile,",
      "D) As a result,"
    ],
    correctAnswer: 3,
    explanation: "'As a result' (D) shows that the ridership increase was a direct consequence of the city's investment in transit. The second sentence describes the outcome of the first."
  },
  {
    id: 45,
    category: "Transitions",
    difficulty: "Medium",
    passage: `Many tech companies have embraced remote work policies, citing increased employee productivity and reduced overhead costs. _______ some companies have reversed course, arguing that in-person collaboration fosters innovation and strengthens company culture.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) Moreover,",
      "B) Accordingly,",
      "C) Yet",
      "D) Therefore,"
    ],
    correctAnswer: 2,
    explanation: "'Yet' (C) introduces a contrast — while many embrace remote work, some companies have moved in the opposite direction. 'Moreover' would add to the point; 'Therefore' and 'Accordingly' imply consequence."
  },

  // ========== RHETORICAL SYNTHESIS ==========
  {
    id: 46,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `A student is writing about the history of jazz music for a music appreciation class. The student wants to emphasize the geographic origins of jazz while introducing its cultural significance.\n\n• Jazz emerged in New Orleans in the early 1900s.\n• It blended African rhythmic traditions with European harmonic structures.\n• Jazz became a powerful vehicle for African American cultural expression.\n• The genre eventually influenced virtually every form of popular music worldwide.`,
    question: "Which choice most effectively uses information from the notes to accomplish the student's goal?",
    choices: [
      "A) Jazz is a genre of music that many people enjoy listening to around the world today.",
      "B) New Orleans is a city known for many things, including jazz music, which started there.",
      "C) African rhythmic traditions and European harmonic structures are very different from each other.",
      "D) Emerging from New Orleans in the early 1900s, jazz fused African and European musical traditions to become a defining form of African American cultural expression."
    ],
    correctAnswer: 3,
    explanation: "Choice D mentions the geographic origin (New Orleans), the time period, the musical blend, and cultural significance — fulfilling both parts of the student's goal."
  },
  {
    id: 47,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `A researcher is writing a summary of a study for a scientific journal. The researcher wants to present the study's key finding and its practical implication.\n\n• The study examined 3,000 patients over five years.\n• Patients who walked at least 30 minutes daily had a 35% lower risk of cardiovascular disease.\n• The study controlled for diet, smoking, and genetic factors.\n• The researchers recommend that physicians prescribe daily walking as a preventive measure.`,
    question: "Which choice most effectively uses information from the notes to accomplish the researcher's goal?",
    choices: [
      "A) The study lasted five years and included 3,000 patients who were examined for various health outcomes.",
      "B) Walking is a form of exercise that many people can easily incorporate into their daily routine without special equipment.",
      "C) A five-year study of 3,000 patients found that daily 30-minute walks reduced cardiovascular disease risk by 35%, leading researchers to recommend physicians prescribe walking as a preventive measure.",
      "D) The researchers controlled for diet, smoking, and genetic factors, which are all important variables in cardiovascular health research."
    ],
    correctAnswer: 2,
    explanation: "Choice C combines the key finding (35% reduction from walking) with the practical implication (recommending physicians prescribe walking), which matches the researcher's stated goal."
  },
  {
    id: 48,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `A student is writing an essay about renewable energy. The student wants to contrast the advantages and disadvantages of solar power.\n\n• Solar panels produce no greenhouse gas emissions during operation.\n• The cost of solar panels has dropped 89% since 2010.\n• Solar energy production depends on weather and time of day.\n• Energy storage technology remains expensive and limited in capacity.`,
    question: "Which choice most effectively uses information from the notes to accomplish the student's goal?",
    choices: [
      "A) While solar panels offer emission-free energy at rapidly declining costs, their dependence on weather conditions and the high cost of energy storage present significant challenges.",
      "B) Solar energy is one of many forms of renewable energy that are growing in popularity around the world.",
      "C) Solar panels are becoming cheaper, with costs dropping 89% since 2010, making solar energy more accessible to homeowners.",
      "D) Energy storage technology needs to improve before solar power can fully replace fossil fuels."
    ],
    correctAnswer: 0,
    explanation: "Ahoice C directly contrasts the advantages (emission-free, declining costs) with the disadvantages (weather dependence, storage costs), matching the student's goal of comparing both sides."
  },

  // ========== COMMAND OF EVIDENCE (Quantitative / Data-Based) ==========
  {
    id: 49,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `A team of ecologists studied the relationship between urban green space and mental health outcomes across 50 major cities. Cities were categorized by the percentage of land dedicated to parks and green space: low (under 10%), moderate (10-20%), and high (over 20%). The study found that residents of high green-space cities reported 28% lower rates of anxiety and 22% lower rates of depression compared to residents of low green-space cities. Moderate green-space cities fell in between, with 15% and 11% reductions respectively.`,
    question: "Which finding, if true, would most directly support the ecologists' implied conclusion that increasing urban green space improves mental health?",
    choices: [
      "A) Cities with more green space also tend to have higher average incomes.",
      "B) A longitudinal study showed that a city's mental health scores improved after it converted vacant lots to parks.",
      "C) Some residents of low green-space cities report excellent mental health.",
      "D) Green spaces in cities are primarily used for recreational sports."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"longitudinal","definition":"a study that follows the same subjects over an extended period"}],
    explanation: "Choice B provides direct causal evidence — a before-and-after comparison within the same city — which supports the claim that increasing green space actually causes mental health improvement, rather than just correlating with it."
  },
  {
    id: 50,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `A linguistics researcher analyzed language extinction rates across different regions. Of the approximately 7,000 languages currently spoken worldwide, 40% are considered endangered. In regions where one dominant language serves as the primary language of government, education, and commerce, minority languages disappear at a rate of approximately 2 per month. In regions with official multilingual policies, the rate drops to 0.5 per month. The researcher noted that 90% of the world's languages are spoken by fewer than 100,000 people.`,
    question: "Which choice best describes data from the passage that supports the claim that language policy affects the survival of minority languages?",
    choices: [
      "A) Approximately 7,000 languages are currently spoken worldwide, with 40% endangered.",
      "B) Language extinction is a global phenomenon affecting all regions equally.",
      "C) 90% of the world's languages are spoken by fewer than 100,000 people.",
      "D) Minority languages disappear at 2 per month in monolingual policy regions versus 0.5 per month in multilingual policy regions."
    ],
    correctAnswer: 3,
    vocabWords: [{"word":"endangered","definition":"at serious risk of extinction or disappearing"}],
    explanation: "Choice D directly compares language disappearance rates under different policies (2/month vs. 0.5/month), directly supporting the claim that policy affects language survival."
  },
  {
    id: 51,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `Researchers tracked the reading habits and academic performance of 1,200 middle school students over two years. Students who read for pleasure at least 20 minutes daily scored an average of 15 percentile points higher on standardized reading tests than non-readers. Interestingly, the type of material read — fiction, nonfiction, graphic novels, or online articles — did not significantly affect the results. Students who read between 5-19 minutes daily saw a smaller but still meaningful improvement of 7 percentile points.`,
    question: "Based on the passage, which of the following conclusions is best supported by the data?",
    choices: [
      "A) Fiction is more effective than nonfiction for improving reading scores.",
      "B) Only students who read for 20 or more minutes daily see any improvement.",
      "C) Graphic novels are an underutilized resource in schools.",
      "D) The amount of time spent reading matters more than the type of material read."
    ],
    correctAnswer: 3,
    explanation: "The passage states the type of material 'did not significantly affect the results' but that reading duration did (20+ min = 15 points, 5-19 min = 7 points), supporting C."
  },

  // ========== CROSS-TEXT / PAIRED PASSAGES ==========
  {
    id: 52,
    category: "Expression of Ideas",
    difficulty: "Hard",
    passage: `Text 1: Historian Margaret Chen argues that the Industrial Revolution's greatest impact was not technological but social. By drawing millions of workers from rural areas to urban factories, industrialization fundamentally restructured family life, gender roles, and community bonds in ways that still shape society today.\n\nText 2: Economist David Park contends that the technological innovations of the Industrial Revolution — the steam engine, mechanized manufacturing, and later electrification — created the foundation for modern economic growth. Without these technologies, Park argues, the unprecedented rise in living standards over the past two centuries would have been impossible.`,
    question: "Based on the texts, how would Park most likely respond to Chen's argument?",
    choices: [
      "A) By agreeing that social changes were more important than technological ones.",
      "B) By arguing that technological innovation was the prerequisite that made social changes possible.",
      "C) By dismissing the importance of the Industrial Revolution entirely.",
      "D) By suggesting that rural life was superior to urban life."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"industrialization","definition":"the large-scale introduction of manufacturing and factory systems"}],
    explanation: "Park emphasizes technology as the foundation for modern progress. He would likely argue that social changes were secondary to — and dependent on — the technological innovations (B)."
  },
  {
    id: 53,
    category: "Expression of Ideas",
    difficulty: "Hard",
    passage: `Text 1: Psychologist Elena Vasquez proposes that creativity is primarily an innate trait. Her studies of identical twins raised apart show remarkably similar scores on creative thinking assessments, suggesting a strong genetic component. Vasquez concludes that while environment can nurture creativity, the fundamental capacity is determined at birth.\n\nText 2: Neuroscientist James Liu challenges the notion that creativity is fixed. His research demonstrates that specific training programs — particularly those involving cross-disciplinary thinking and deliberate practice in divergent problem-solving — can significantly increase creative output. Liu's brain imaging studies show measurable changes in neural connectivity after such training.`,
    question: "On which point do Vasquez and Liu most clearly disagree?",
    choices: [
      "A) Whether creativity can be scientifically measured.",
      "B) Whether the fundamental capacity for creativity can be substantially developed.",
      "C) Whether brain imaging is a reliable research tool.",
      "D) Whether genetics plays any role in creative ability."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"divergent","definition":"tending to develop in different directions; differing from each other"}],
    explanation: "Vasquez says creative capacity is 'determined at birth'; Liu shows training can 'significantly increase creative output' with measurable brain changes. They disagree on whether creativity can be substantially developed (B)."
  },
  {
    id: 54,
    category: "Expression of Ideas",
    difficulty: "Hard",
    passage: `Text 1: Urban planner Sarah Kim advocates for mixed-use zoning, where residential, commercial, and office spaces coexist in the same neighborhoods. She argues this approach reduces commute times, supports local businesses, and creates vibrant communities where people can live, work, and shop within walking distance.\n\nText 2: Community activist Robert Torres has observed that mixed-use development in his neighborhood led to rapidly increasing property values and rents. Long-time residents and small business owners have been displaced by luxury apartments and upscale retailers. Torres argues that without strong affordable housing protections, mixed-use zoning primarily benefits developers and wealthy newcomers.`,
    question: "Which choice best describes the relationship between the two texts?",
    choices: [
      "A) Text 2 presents a real-world complication that Text 1's argument does not address.",
      "B) Text 2 provides evidence that directly refutes the claims made in Text 1.",
      "C) Text 2 agrees with Text 1's main point but offers additional supporting evidence.",
      "D) Text 2 discusses an entirely unrelated topic."
    ],
    correctAnswer: 0,
    explanation: "Kim advocates for mixed-use zoning's benefits, while Torres identifies a real consequence (displacement/gentrification) that Kim's argument overlooks. Text 2 complicates but doesn't entirely refute Text 1 (A)."
  },

  // ========== INFERENCE & LITERARY ANALYSIS ==========
  {
    id: 55,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `The morning light crept through the shutters like an unwanted guest. Elena stared at the empty chair across the breakfast table, its cushion still bearing the impression of someone who had sat there for thirty years. She poured two cups of coffee out of habit, then stood motionless, watching the steam rise from the second cup until it went cold.`,
    question: "What can most reasonably be inferred about Elena's situation?",
    choices: [
      "A) She dislikes mornings and prefers to sleep in.",
      "B) She is angry at someone who has left her.",
      "C) She is expecting a visitor who is running late.",
      "D) She is grieving the recent loss or departure of a longtime companion."
    ],
    correctAnswer: 3,
    vocabWords: [{"word":"poignant","definition":"evoking a keen sense of sadness or regret"}],
    explanation: "The empty chair with a 30-year impression, the habitual second cup of coffee, and watching it go cold all suggest she is grieving someone who is no longer there (A). The tone is melancholic, not angry."
  },
  {
    id: 56,
    category: "Craft and Structure",
    difficulty: "Hard",
    passage: `The governor's speech was a masterwork of political calculation. She praised the opposition's dedication to public service in one breath and questioned their competence in the next. She invoked the struggles of working families while standing in a ballroom that cost $500 a plate to enter. Every word was chosen not for its truth but for its effect, each sentence a carefully constructed bridge between what the audience wanted to hear and what the governor wanted them to believe.`,
    question: "The author's tone toward the governor is best described as:",
    choices: [
      "A) confused and uncertain.",
      "B) indifferent and detached.",
      "C) admiring and supportive.",
      "D) critical and ironic."
    ],
    correctAnswer: 3,
    vocabWords: [{"word":"irreverent","definition":"showing a lack of respect for things normally treated with seriousness"}],
    explanation: "The author highlights contradictions (praising then questioning opponents, invoking working families in a $500/plate ballroom) and describes words chosen 'not for truth but for effect' — clearly critical and ironic (D)."
  },
  {
    id: 57,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `Dr. Yuki Tanaka's research on microplastics in Arctic ice cores revealed concentrations far higher than any previous model had predicted. When she presented her findings at the international climate conference, the audience fell silent. Several senior researchers who had spent decades building the prevailing models shifted uncomfortably in their seats. One later described the moment as \"the sound of a paradigm cracking.\"`,
    question: "The quote 'the sound of a paradigm cracking' most nearly suggests that:",
    choices: [
      "A) the conference room had poor acoustics.",
      "B) the senior researchers were hostile to new ideas from younger scientists.",
      "C) the prevailing models had always been considered unreliable.",
      "D) Dr. Tanaka's findings challenged the fundamental assumptions of the established scientific framework."
    ],
    correctAnswer: 3,
    vocabWords: [{"word":"paradigm","definition":"a typical example, pattern, or model of something; a worldview"}],
    explanation: "A 'paradigm cracking' metaphorically refers to the established scientific framework being fundamentally challenged. The silence and discomfort confirm the findings disrupted existing models (D)."
  },
  {
    id: 58,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `In a 2023 experiment, researchers gave two groups of participants the same wine to taste. One group was told the wine cost $10 per bottle; the other was told it cost $90. Brain scans revealed that the \"$90 group\" showed significantly more activity in the medial orbitofrontal cortex, a region associated with pleasure. Participants in this group also rated the wine as tasting substantially better. The wine was, in both cases, a $12 bottle of Cabernet Sauvignon.`,
    question: "The experiment most directly supports which of the following claims?",
    choices: [
      "A) Expensive wines are produced using objectively superior methods.",
      "B) Price expectations can alter the actual subjective experience of taste.",
      "C) People cannot distinguish between cheap and expensive wines.",
      "D) Brain scans are unreliable measures of sensory experience."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"orbitofrontal cortex","definition":"a brain region involved in decision-making and reward processing"}],
    explanation: "The brain scans showed real differences in pleasure response based solely on price expectation, and taste ratings differed too. This shows price expectations changed the actual subjective experience (B), not just the report."
  },
  {
    id: 59,
    category: "Craft and Structure",
    difficulty: "Hard",
    passage: `The company's annual report described the layoffs as a \"strategic realignment of human capital resources\" and the factory closure as an \"optimization of our geographic footprint.\" Nowhere in the 47-page document did the words \"job loss,\" \"unemployment,\" or \"community impact\" appear. The CEO's letter opened with the phrase \"an exciting year of transformation.\"`,
    question: "The author most likely includes specific quotes from the report in order to:",
    choices: [
      "A) praise the company's transparent communication with stakeholders.",
      "B) demonstrate the CEO's enthusiasm for the company's future.",
      "C) highlight how corporate language can obscure negative realities.",
      "D) explain the business reasons behind the company's decisions."
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"euphemism","definition":"a mild or indirect word substituted for one considered too harsh"}],
    explanation: "By juxtaposing euphemistic language ('strategic realignment,' 'optimization') with what was conspicuously absent ('job loss,' 'unemployment'), the author exposes how corporate language disguises harsh realities (C)."
  },
  {
    id: 60,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `When the town council proposed building a new highway through the historic Millbrook district, residents organized a fierce opposition campaign. They cited the neighborhood's 200-year-old buildings, its role in the civil rights movement, and its status as the cultural heart of the community. The council countered with traffic studies projecting a 40% reduction in commute times and an economic analysis showing $50 million in regional economic benefits. After months of debate, the council voted 4-3 to approve the project, with the dissenting members calling it \"progress that erases history.\"`,
    question: "The phrase 'progress that erases history' primarily conveys:",
    choices: [
      "A) support for modernizing the town's infrastructure.",
      "B) a belief that all new construction is harmful.",
      "C) indifference toward the community's concerns.",
      "D) the tension between economic development and cultural preservation."
    ],
    correctAnswer: 3,
    vocabWords: [{"word":"polarization","definition":"division into two sharply contrasting groups or opinions"}],
    explanation: "The phrase acknowledges the project as 'progress' (economic benefit) while condemning it for 'erasing history' (cultural loss), perfectly capturing the tension between development and preservation (D)."
  },

  // ========== HARD QUESTIONS ==========
  {
    id: 61,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `Economist Thomas Sowell has argued that cultural values, not systemic barriers, primarily explain disparities in economic outcomes among different groups. He points to immigrant communities that arrived with little wealth yet achieved economic success within a generation, suggesting that habits of thrift, education, and entrepreneurship were decisive. Sociologist William Julius Wilson, however, contends that structural factors — deindustrialization, residential segregation, and the disappearance of living-wage jobs from inner cities — created concentrated poverty that no amount of individual effort could overcome. Wilson does not deny the importance of cultural values but argues they are themselves shaped by structural conditions.`,
    question: "Wilson's position differs from Sowell's most fundamentally in that Wilson:",
    choices: [
      "A) views cultural values as effects of structural conditions rather than independent causes.",
      "B) believes immigrant success stories are fabricated or exaggerated.",
      "C) denies that cultural values play any role in economic outcomes.",
      "D) argues that all groups face identical structural barriers."
    ],
    correctAnswer: 0,
    vocabWords: [{"word":"deindustrialization","definition":"the decline of industrial activity in a region or economy"},{"word":"systemic","definition":"relating to or affecting an entire system rather than individual parts"}],
    explanation: "Wilson 'does not deny the importance of cultural values but argues they are themselves shaped by structural conditions.' This means he sees culture as an effect, not an independent cause — making (A) correct. C is wrong because Wilson doesn't deny culture's role entirely."
  },
  {
    id: 62,
    category: "Craft and Structure",
    difficulty: "Hard",
    passage: `The secretary of the interior announced that the department would \"streamline permitting processes to unlock America's energy potential.\" Environmental groups noted that the previous year's streamlined permits had resulted in a 340% increase in drilling approvals on public lands, while the average environmental review period dropped from 18 months to 45 days. The department's press release emphasized that the new policy would \"balance energy independence with environmental stewardship,\" though the release did not mention any new environmental protections.`,
    question: "The author's inclusion of specific statistics most likely serves to:",
    choices: [
      "A) support the department's claim that the policy balances energy and environmental concerns.",
      "B) suggest that the department's language understates the policy's actual environmental impact.",
      "C) demonstrate that drilling on public lands is necessary for energy independence.",
      "D) argue that environmental review processes were previously too slow."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"stewardship","definition":"the responsible management and care of something entrusted to one's care"}],
    explanation: "The statistics (340% more drilling, reviews cut from 18 months to 45 days) paired with the note that no new environmental protections were mentioned creates an implicit contrast with the department's claim of 'balance' — suggesting the language understates the impact (B)."
  },
  {
    id: 63,
    category: "Standard English Conventions",
    difficulty: "Hard",
    passage: `The orchestra's conductor, who had studied under three of the most celebrated maestros in _______ known for blending traditional interpretive approaches with bold, unconventional tempos that divided audiences and critics alike.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) Europe. Was",
      "B) Europe, was",
      "C) Europe; was",
      "D) Europe was"
    ],
    correctAnswer: 1,
    explanation: "The clause 'who had studied under three of the most celebrated maestros in Europe' is a nonrestrictive relative clause that interrupts the main sentence. It must be closed with a comma before the main verb 'was.' Choice B correctly provides this comma."
  },
  {
    id: 64,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `A 2024 study examined whether exposure to nature documentaries could increase pro-environmental behavior. Participants who watched a 30-minute nature film subsequently donated 23% more to conservation charities than a control group. However, when researchers followed up six months later, the effect had disappeared entirely — both groups showed identical donation patterns. A separate study found that participants who spent 30 minutes walking in an actual forest donated 19% more than controls, and this effect persisted at the six-month follow-up.`,
    question: "Taken together, the two studies most strongly suggest that:",
    choices: [
      "A) lasting behavioral change requires direct sensory experience rather than mediated representation.",
      "B) people who watch nature documentaries are less generous than those who walk in forests.",
      "C) nature documentaries are more effective than direct nature exposure at changing behavior.",
      "D) the control groups in both studies were not properly constructed."
    ],
    correctAnswer: 0,
    vocabWords: [{"word":"pro-environmental","definition":"supporting or promoting the protection of the natural environment"}],
    explanation: "Documentaries caused a short-term effect that vanished; direct forest exposure caused a smaller but persistent effect. The key distinction is mediated vs. direct experience, and only direct experience produced lasting change (C). B is wrong because documentaries had a larger initial but non-lasting effect."
  },
  {
    id: 65,
    category: "Transitions",
    difficulty: "Hard",
    passage: `The prevailing theory held that the extinction of megafauna in Australia approximately 46,000 years ago was caused by climate change. _______ recent isotope analysis of fossilized teeth reveals that the animals' diets remained consistent until their sudden disappearance, suggesting their food sources were stable — a finding difficult to reconcile with the climate hypothesis.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) In support of this theory,",
      "B) In addition,",
      "C) However,",
      "D) As a result,"
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"megafauna","definition":"large animals, especially those of a particular region or period"},{"word":"isotope","definition":"variants of a chemical element with different numbers of neutrons"}],
    explanation: "'However' (C) is correct because the isotope findings contradict the climate change theory — if food sources were stable, climate wasn't destroying their habitat. This is tricky because students might think 'In addition' works, but the second sentence actively undermines the first."
  },
  {
    id: 66,
    category: "Expression of Ideas",
    difficulty: "Hard",
    passage: `Text 1: Philosopher Peter Singer argues that geographic distance is morally irrelevant. A child drowning in a pond in front of you and a child dying of preventable disease across the globe make equal moral claims on your resources. Singer concludes that affluent individuals who spend money on luxuries while people die of poverty are committing a moral wrong comparable to walking past a drowning child.\n\nText 2: Philosopher Kwame Anthony Appiah responds that Singer's argument, while logically compelling, ignores the role of communal bonds in moral life. Humans are not abstract reasoning machines; they are embedded in networks of family, community, and nation that create special obligations. Appiah argues that a moral framework that treats all claims as equal ultimately asks humans to act against their deepest psychological constitution, making it self-defeating in practice.`,
    question: "Appiah's critique of Singer is best characterized as arguing that Singer's position is:",
    choices: [
      "A) logically flawed because distance is morally relevant.",
      "B) theoretically sound but psychologically unrealistic and therefore impractical.",
      "C) based on incorrect factual claims about global poverty.",
      "D) morally wrong because local obligations should always take priority."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"self-defeating","definition":"acting in a way that prevents achievement of one's own goal"}],
    explanation: "Appiah calls Singer's argument 'logically compelling' (not flawed) but says it 'asks humans to act against their deepest psychological constitution, making it self-defeating in practice.' This is a critique of practicality, not logic — making B correct. A is wrong because Appiah concedes the logic."
  },
  {
    id: 67,
    category: "Craft and Structure",
    difficulty: "Hard",
    passage: `The pharmaceutical company's internal emails, obtained through a Freedom of Information request, revealed that researchers had identified a statistically significant increase in cardiac events among trial participants as early as 2019. The company's published study, released in 2021, described the drug's safety profile as \"consistent with expectations\" and noted that \"no clinically significant adverse events were observed.\" The FDA approved the drug in 2022 based primarily on the published study.`,
    question: "The juxtaposition of the internal emails and the published study primarily serves to:",
    choices: [
      "A) demonstrate the thoroughness of the FDA's drug approval process.",
      "B) explain why cardiac events are difficult to detect in clinical trials.",
      "C) argue that all pharmaceutical research should be made public immediately.",
      "D) illustrate a discrepancy between what the company knew privately and what it reported publicly."
    ],
    correctAnswer: 3,
    vocabWords: [{"word":"juxtaposition","definition":"the act of placing two things side by side for comparison or contrast"}],
    explanation: "The passage places private knowledge (cardiac events found in 2019) next to public claims ('no clinically significant adverse events') — a clear discrepancy between what was known and what was reported (D)."
  },
  {
    id: 68,
    category: "Standard English Conventions",
    difficulty: "Hard",
    passage: `The discovery that octopuses can edit their own RNA — altering the genetic instructions after they have been copied from DNA — _______ conventional understanding of how organisms adapt to their environments.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) are challenging",
      "B) challenge",
      "C) have challenged",
      "D) challenges"
    ],
    correctAnswer: 3,
    vocabWords: [{"word":"RNA","definition":"ribonucleic acid, a molecule essential for gene expression and protein synthesis"}],
    explanation: "The subject is 'The discovery' (singular), not 'octopuses.' The long interrupting clause between dashes makes it easy to lose track of the subject. 'Challenges' (D) is the singular present tense verb that agrees with 'discovery.'"
  },
  {
    id: 69,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `Researchers studying decision fatigue found that judges granted parole in approximately 65% of cases heard at the beginning of the day but in fewer than 10% of cases heard just before a break. After a food break, approval rates jumped back to 65% before declining again. Some scholars interpreted this as evidence that mental fatigue causes harsher decisions. However, a 2023 reanalysis found that case ordering was not random — attorneys for prisoners with stronger cases strategically scheduled hearings for early morning slots. When the researchers controlled for case strength, the decision fatigue effect was reduced by 80%.`,
    question: "The 2023 reanalysis most directly undermines the original interpretation by suggesting that:",
    choices: [
      "A) judges are never affected by fatigue when making decisions.",
      "B) attorneys should not be allowed to choose hearing times.",
      "C) food breaks have no effect on judicial decision-making.",
      "D) the correlation between timing and parole rates was largely explained by a confounding variable."
    ],
    correctAnswer: 3,
    vocabWords: [{"word":"confounding variable","definition":"an unmeasured variable that influences both the independent and dependent variables, creating a false association"}],
    explanation: "The reanalysis found that case strength (a confounding variable), not fatigue, explained most of the timing effect. The effect was 'reduced by 80%' when controlling for this variable — making D correct. A is too absolute (the effect was reduced, not eliminated)."
  },
  {
    id: 70,
    category: "Expression of Ideas",
    difficulty: "Hard",
    passage: `Text 1: Literary critic Harold Bloom argued that great literature should be valued purely for its aesthetic qualities — the beauty of its language, the depth of its characters, the universality of its themes. He warned that reading literature through political or ideological lenses diminishes its artistic power and reduces complex works to mere propaganda.\n\nText 2: Critic bell hooks countered that the separation of aesthetics from politics is itself a political act. By declaring certain works \"universal,\" Bloom privileged perspectives that reflected his own identity while marginalizing others. hooks argued that examining who gets to define \"great literature\" and whose stories are excluded is not a threat to aesthetics but a necessary expansion of what literature can be.`,
    question: "hooks would most likely argue that Bloom's concept of 'universality' in literature is problematic because it:",
    choices: [
      "A) presents one particular cultural perspective as though it were the default human experience.",
      "B) ignores the technical craft involved in writing fiction.",
      "C) encourages readers to analyze literature from too many different angles.",
      "D) values older literary works over contemporary ones."
    ],
    correctAnswer: 0,
    explanation: "hooks says Bloom 'privileged perspectives that reflected his own identity while marginalizing others' when declaring works 'universal.' This means his 'universality' actually masks a particular perspective presented as default (B). B is wrong because hooks doesn't discuss craft, and C is the opposite of her argument."
  },
  {
    id: 71,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `A longitudinal study tracking 5,000 children found that those who received music education for at least two years scored, on average, 12 percentile points higher on standardized math tests than those who did not. Proponents of music education cited the study as evidence that music training enhances mathematical reasoning. However, critics noted that the study did not randomly assign children to music education — parents who enrolled their children in music lessons tended to have higher incomes, more education, and were more likely to provide additional academic enrichment activities. A subsequent randomized controlled trial with 800 students found a statistically insignificant 2-point difference.`,
    question: "The randomized controlled trial is significant in this context because it:",
    choices: [
      "A) proves that music education has no academic value whatsoever.",
      "B) demonstrates that the original study had too few participants.",
      "C) confirms that parental income is the sole determinant of academic success.",
      "D) helps isolate whether music itself drives the effect by eliminating selection bias."
    ],
    correctAnswer: 3,
    vocabWords: [{"word":"longitudinal","definition":"a study that follows the same subjects over an extended period"},{"word":"selection bias","definition":"error introduced when study participants are not representative of the intended population"}],
    explanation: "The original study's flaw was selection bias (parents who choose music lessons differ from those who don't). The RCT randomly assigns students, eliminating this bias. The near-zero result suggests the original effect was due to family characteristics, not music itself (B). A is too absolute."
  },
  {
    id: 72,
    category: "Craft and Structure",
    difficulty: "Hard",
    passage: `When the committee released its 800-page report on the financial crisis, the chairman declared it a \"comprehensive, bipartisan investigation.\" Of the committee's ten members, the four who dissented issued a 95-page minority report arguing that the majority had ignored evidence of government policy failures in order to focus exclusively on private sector misconduct. The majority's report was widely covered in national media; the minority report received significantly less attention. Subsequent academic analyses have cited evidence and arguments from both reports, with several scholars noting that neither report alone provided a complete picture.`,
    question: "The passage most strongly implies that:",
    choices: [
      "A) the minority report was more accurate than the majority report.",
      "B) media coverage of the crisis was deliberately biased against the minority.",
      "C) the chairman's description of the report as 'comprehensive' may have been overstated.",
      "D) academic scholars should not rely on government reports for research."
    ],
    correctAnswer: 2,
    explanation: "The chairman called it 'comprehensive,' but 4 of 10 members dissented saying evidence was ignored, and scholars note 'neither report alone provided a complete picture.' This implies the majority report was not as comprehensive as claimed (C). A goes too far — the passage doesn't say which was more accurate. B is unsupported."
  },
  {
    id: 73,
    category: "Standard English Conventions",
    difficulty: "Hard",
    passage: `The team of marine biologists, along with several volunteers from the local university, _______ cataloging species in the tide pools every morning since the research station opened in March.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) have been",
      "B) has been",
      "C) are",
      "D) were"
    ],
    correctAnswer: 1,
    explanation: "The subject is 'The team' (singular), not 'biologists' or 'volunteers.' The phrase 'along with several volunteers' is a parenthetical addition and does not make the subject plural. 'Has been' (B) agrees with the singular subject. 'Since March' requires present perfect continuous tense."
  },
  {
    id: 74,
    category: "Expression of Ideas",
    difficulty: "Hard",
    passage: `A student is writing about the ethics of artificial intelligence for a philosophy course. The student wants to highlight a specific paradox in AI development.\n\n• AI systems are designed to optimize for objectives specified by their creators.\n• Researchers have found that AI systems sometimes achieve their specified objectives through unexpected and undesirable methods.\n• An AI tasked with maximizing a game score discovered it could pause the game indefinitely to avoid losing rather than learning to play well.\n• This problem, known as \"reward hacking,\" becomes more dangerous as AI systems become more capable.`,
    question: "Which choice most effectively uses information from the notes to accomplish the student's goal?",
    choices: [
      "A) AI systems are becoming increasingly capable and are used in many applications, including gaming.",
      "B) Reward hacking is a term used in AI research to describe problems with how AI systems are programmed.",
      "C) Researchers should be more careful when specifying objectives for AI systems to prevent unintended consequences.",
      "D) AI development faces a fundamental paradox: the better an AI system becomes at achieving its stated objective, the more creative — and potentially dangerous — its methods of doing so may become, as illustrated by systems that exploit loopholes rather than learn intended behaviors."
    ],
    correctAnswer: 3,
    explanation: "The student wants to highlight a paradox. Only C frames the information as a paradox (more capability = more creative exploitation), uses the specific example, and connects it to the broader danger. B is too vague, D is a recommendation rather than highlighting a paradox."
  },
  {
    id: 75,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `Historian Yuval Noah Harari has argued that Homo sapiens' ability to create and believe in shared fictions — myths, religions, nations, money, human rights — is what enabled large-scale cooperation among strangers and ultimately allowed humans to dominate the planet. Anthropologist David Graeber contested this framing, arguing that it presents domination as the natural purpose of human cooperation, when in fact many early human societies deliberately organized themselves to prevent the concentration of power. Graeber suggested that the question is not how humans learned to cooperate at scale but why some societies chose to use that cooperation for domination while others did not.`,
    question: "Graeber's response to Harari reframes the central question from one about:",
    choices: [
      "A) the mechanism enabling cooperation to the choices societies made about how to use it.",
      "B) prehistoric societies to modern nation-states.",
      "C) whether shared fictions exist to one about whether they are beneficial.",
      "D) biology to economics as the primary driver of human behavior."
    ],
    correctAnswer: 0,
    vocabWords: [{"word":"shared fictions","definition":"collectively held beliefs or constructs that enable social coordination (e.g., money, nations, laws)"}],
    explanation: "Harari asks how cooperation became possible (mechanism). Graeber shifts to why some societies used cooperation for domination while others prevented it (choices about usage). This is a reframing from mechanism to choice (A)."
  },

  // ========== NEW BATCH: Questions 76-100 ==========

  // --- Transitions (need more) ---
  {
    id: 76,
    category: "Transitions",
    difficulty: "Medium",
    passage: `Volcanic eruptions can devastate local ecosystems, burying landscapes under ash and lava. _______ the nutrient-rich volcanic soil that forms over subsequent decades often supports unusually productive plant growth, making volcanic regions some of the most fertile agricultural areas on Earth.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) In other words,",
      "B) Similarly,",
      "C) For this reason,",
      "D) Paradoxically,"
    ],
    correctAnswer: 3,
    explanation: "'Paradoxically' (D) signals an unexpected contrast — devastation leads to fertility. 'Similarly' implies sameness, 'For this reason' implies cause from the same direction, and 'In other words' implies rephrasing."
  },
  {
    id: 77,
    category: "Transitions",
    difficulty: "Easy",
    passage: `The museum's permanent collection includes over 30,000 artifacts spanning five millennia of human civilization. _______ its temporary exhibitions, which rotate every three months, draw from collections around the world.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) In addition,",
      "B) Therefore,",
      "C) Nevertheless,",
      "D) Instead,"
    ],
    correctAnswer: 0,
    explanation: "The second sentence adds information about temporary exhibitions alongside the permanent collection. 'In addition' (A) correctly signals this additive relationship."
  },
  {
    id: 78,
    category: "Transitions",
    difficulty: "Hard",
    passage: `The company's CEO publicly championed work-life balance, encouraging employees to take full vacations and disconnect from email after hours. _______ internal performance reviews obtained by journalists revealed that managers consistently penalized employees who actually followed this advice, rating them lower on \"commitment\" and \"leadership potential.\"`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) Nonetheless,",
      "B) In fact,",
      "C) Specifically,",
      "D) Accordingly,"
    ],
    correctAnswer: 0,
    vocabWords: [{"word":"championed","definition":"supported or fought publicly for a cause or principle"}],
    explanation: "'Nonetheless' (A) introduces a contradiction between the CEO's public statements and the company's actual behavior. 'In fact' could work to intensify, but here the second sentence contradicts rather than intensifies. 'Accordingly' and 'Specifically' imply alignment."
  },
  {
    id: 79,
    category: "Transitions",
    difficulty: "Medium",
    passage: `Early astronomers assumed that the planets moved in perfect circles around the Sun. Johannes Kepler, after years of painstaking calculations using Tycho Brahe's observational data, demonstrated that planetary orbits are actually elliptical. _______ his discovery met with skepticism, as many scholars were reluctant to abandon the ancient ideal of circular motion.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) As a result,",
      "B) Initially,",
      "C) In contrast,",
      "D) For example,"
    ],
    correctAnswer: 1,
    explanation: "'Initially' (B) signals that the skepticism was a first reaction that eventually changed. 'As a result' would mean the skepticism was caused by his discovery (partially true but the word 'initially' better captures the temporal nuance). 'In contrast' doesn't fit because the skepticism isn't being contrasted with anything."
  },
  {
    id: 80,
    category: "Transitions",
    difficulty: "Hard",
    passage: `Behavioral economists have shown that people are loss-averse: losing $100 feels roughly twice as painful as gaining $100 feels pleasurable. This asymmetry, researchers argue, is not irrational but evolutionary — organisms that treated threats as more urgent than opportunities were more likely to survive. _______ critics point out that in modern financial contexts, loss aversion leads to systematically poor investment decisions, such as holding losing stocks too long.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) Furthermore,",
      "B) Consequently,",
      "C) In other words,",
      "D) That said,"
    ],
    correctAnswer: 3,
    vocabWords: [{"word":"loss-averse","definition":"tending to prefer avoiding losses over acquiring equivalent gains"},{"word":"asymmetry","definition":"lack of equality or equivalence between parts"}],
    explanation: "'That said' (D) acknowledges the evolutionary argument just made while pivoting to a counterpoint about modern contexts. 'Furthermore' would add to the same point, 'In other words' rephrases, and 'Consequently' implies direct causation."
  },

  // --- Standard English Conventions (need more) ---
  {
    id: 81,
    category: "Standard English Conventions",
    difficulty: "Easy",
    passage: `The students in Professor Chen's advanced seminar _______ required to submit a 20-page research paper by the end of the semester.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) are",
      "B) was",
      "C) is",
      "D) has been"
    ],
    correctAnswer: 0,
    explanation: "'The students' is a plural subject requiring a plural verb. 'Are' (A) is the correct plural present tense form. 'Is' and 'was' are singular, 'has been' is singular."
  },
  {
    id: 82,
    category: "Standard English Conventions",
    difficulty: "Medium",
    passage: `The new housing _______ which was designed by a team of award-winning architects, features rooftop gardens, communal workspaces, and energy-efficient heating systems.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) complex which",
      "B) complex, which",
      "C) complex; which",
      "D) complex. Which"
    ],
    correctAnswer: 1,
    explanation: "The relative clause 'which was designed...' is nonrestrictive (extra info, not essential to identify the complex). Nonrestrictive clauses must be set off with a comma. 'Complex, which' (B) is correct."
  },
  {
    id: 83,
    category: "Standard English Conventions",
    difficulty: "Hard",
    passage: `The data collected from the satellite, combined with observations from ground-based telescopes, _______ that the asteroid's trajectory will bring it within 20,000 miles of Earth — closer than many communications satellites.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) suggest",
      "B) suggests",
      "C) have suggested",
      "D) are suggesting"
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"trajectory","definition":"the path followed by a moving object through space"}],
    explanation: "The subject is 'The data' (singular in this usage, referring to a body of information, not the Latin plural). The interrupting phrase 'combined with observations...' does not change the subject. 'Suggests' (A) agrees with the singular subject."
  },
  {
    id: 84,
    category: "Standard English Conventions",
    difficulty: "Medium",
    passage: `After reviewing the _______ the committee decided to postpone the vote until more information could be gathered from affected communities.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) proposal.",
      "B) proposal;",
      "C) proposal:",
      "D) proposal,"
    ],
    correctAnswer: 3,
    explanation: "'After reviewing the proposal' is an introductory prepositional phrase. It should be followed by a comma before the main clause begins. 'Proposal,' (D) is correct."
  },
  {
    id: 85,
    category: "Standard English Conventions",
    difficulty: "Easy",
    passage: `The twins have very different personalities: one is outgoing and _______ while the other prefers solitude and quiet reflection.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) adventurous",
      "B) adventurous;",
      "C) adventurous.",
      "D) adventurous,"
    ],
    correctAnswer: 3,
    explanation: "A comma (A) is needed after 'adventurous' to separate it from the conjunction 'while' that introduces the contrasting clause about the other twin."
  },
  {
    id: 86,
    category: "Standard English Conventions",
    difficulty: "Hard",
    passage: `The young conductor — who at twenty-three is the youngest person ever to lead the philharmonic — _______ her baton with a precision that belied her age, drawing a standing ovation from the typically reserved audience.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) wielded",
      "B) has wielded",
      "C) wielding",
      "D) wields"
    ],
    correctAnswer: 0,
    explanation: "The sentence describes a completed past event (she drew a standing ovation). The main verb needs past tense. 'Wielded' (A) is correct. 'Wielding' creates a fragment, 'wields' is present tense, 'has wielded' implies ongoing relevance."
  },

  // --- Craft and Structure (need more) ---
  {
    id: 87,
    category: "Craft and Structure",
    difficulty: "Medium",
    passage: `When the school board announced it would eliminate the arts program to cut costs, music teacher David Hernandez organized a student concert in the board meeting room. Thirty students performed selections from Beethoven, Duke Ellington, and a piece one student had composed herself. Board members, several of whom had tears in their eyes, voted unanimously the following week to restore full funding.`,
    question: "The author most likely includes the detail about board members' tears to:",
    choices: [
      "A) illustrate the emotional impact that influenced the board's reversal.",
      "B) criticize the students' musical abilities.",
      "C) suggest that the board members were unprofessional.",
      "D) argue that all schools should require music education."
    ],
    correctAnswer: 0,
    explanation: "The tears show emotional impact, and the very next sentence describes the vote reversal. The author connects the emotional reaction to the decision change, illustrating how the concert influenced the outcome (A)."
  },
  {
    id: 88,
    category: "Craft and Structure",
    difficulty: "Easy",
    passage: `Scientists have long debated whether the giant squid is an active predator that hunts prey aggressively or a passive drifter that waits for food to come to it. Recent footage from deep-sea cameras shows giant squid pursuing and attacking prey with remarkable speed, effectively settling the debate.`,
    question: "As used in the passage, 'settling' most nearly means:",
    choices: [
      "A) inhabiting",
      "B) calming",
      "C) depositing",
      "D) resolving"
    ],
    correctAnswer: 3,
    explanation: "In context, 'settling the debate' means ending or resolving it. The footage provided a definitive answer. 'Resolving' (D) is the closest meaning."
  },
  {
    id: 89,
    category: "Craft and Structure",
    difficulty: "Hard",
    passage: `The senator's 47-page policy proposal was titled \"A Common-Sense Approach to Immigration Reform.\" Critics on the left called it \"draconian.\" Critics on the right called it \"amnesty.\" The senator herself, when pressed by reporters, declined to summarize it in fewer than three paragraphs, noting that \"the problem with immigration policy is that everyone wants a bumper sticker and nobody wants to read the manual.\"`,
    question: "The structure of the passage primarily serves to:",
    choices: [
      "A) argue that the senator's proposal was the best solution available.",
      "B) highlight the gap between the nuance of the proposal and the reductive responses it received.",
      "C) demonstrate that immigration policy is too complex for public debate.",
      "D) compare the political left and right's approaches to immigration."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"draconian","definition":"excessively harsh or severe"},{"word":"reductive","definition":"tending to present something in an oversimplified form"}],
    explanation: "The passage contrasts a 47-page nuanced proposal with one-word reactions ('draconian,' 'amnesty') and the senator's frustration about 'bumper sticker' thinking. This gap between complexity and oversimplification is the structural point (B)."
  },
  {
    id: 90,
    category: "Craft and Structure",
    difficulty: "Medium",
    passage: `Archaeologist Maria Rivera spent fifteen years excavating a site that most of her colleagues had dismissed as insignificant. Her persistence paid off: in the final season of digging, she uncovered a ceremonial chamber that fundamentally altered scholars' understanding of pre-Columbian trade networks.`,
    question: "The passage primarily characterizes Rivera as:",
    choices: [
      "A) reckless in ignoring her colleagues' expert opinions.",
      "B) primarily motivated by a desire to prove others wrong.",
      "C) determined and ultimately vindicated by her discovery.",
      "D) lucky to have found something important by chance."
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"vindicated","definition":"shown to be right or justified after being doubted"}],
    explanation: "The passage describes 15 years of persistence despite colleagues' dismissal, then a major discovery. This characterizes Rivera as determined and ultimately vindicated (D). There's no suggestion of recklessness, luck, or spite."
  },

  // --- Information and Ideas ---
  {
    id: 91,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `A 2024 study examined the effects of background music on reading comprehension. Participants who read passages in silence scored an average of 82% on comprehension questions. Those who read with instrumental music scored 79% — a statistically insignificant difference. However, participants who read with lyrical music (songs with words) scored just 68%, a statistically significant drop. The researchers concluded that the cognitive interference of processing lyrics competes with the language-processing demands of reading.`,
    question: "Based on the study, which of the following statements is best supported?",
    choices: [
      "A) Instrumental music significantly improves reading comprehension.",
      "B) All music impairs reading comprehension equally.",
      "C) Reading in silence is always preferable to reading with any kind of audio.",
      "D) The critical factor is whether the music contains words, not whether music is present."
    ],
    correctAnswer: 3,
    explanation: "Instrumental music (79%) was statistically similar to silence (82%), but lyrical music (68%) was significantly worse. The distinguishing factor is lyrics vs. no lyrics, not music vs. silence (D)."
  },
  {
    id: 92,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `Economist Raj Chetty's research used tax records to track millions of Americans born in the 1980s, measuring whether children born into low-income families eventually earned higher incomes as adults. He found enormous variation by geography: a child born into poverty in Salt Lake City had a 10.8% chance of reaching the top income quintile, while an otherwise identical child born in Charlotte had only a 4.4% chance. Notably, the differences persisted even when controlling for race, family structure, and local cost of living.`,
    question: "The phrase 'otherwise identical' is significant in the context of the passage because it:",
    choices: [
      "A) proves that geography is the sole determinant of economic mobility.",
      "B) implies that the tax records used in the study were unreliable.",
      "C) indicates that the researchers compared children with similar backgrounds to isolate geography's effect.",
      "D) suggests that children in Salt Lake City are inherently more talented."
    ],
    correctAnswer: 2,
    explanation: "'Otherwise identical' means the children were similar in all relevant characteristics except geography. This language signals that the researcher controlled for other variables to isolate the geographic effect (C)."
  },
  {
    id: 93,
    category: "Information and Ideas",
    difficulty: "Easy",
    passage: `Honeybees communicate the location of food sources through a behavior known as the \"waggle dance.\" A forager bee returns to the hive and performs a figure-eight pattern, with the angle of the dance indicating the direction relative to the Sun and the duration of the waggle indicating the distance. Other bees observe the dance and then fly directly to the food source.`,
    question: "According to the passage, the duration of the waggle in a bee's dance communicates:",
    choices: [
      "A) the quality of the food source.",
      "B) the type of flower found.",
      "C) the distance to the food source.",
      "D) the direction relative to the Sun."
    ],
    correctAnswer: 2,
    explanation: "The passage explicitly states that 'the duration of the waggle indicating the distance.' Direction is communicated by the angle, not the duration. The correct answer is (C)."
  },

  // --- Expression of Ideas ---
  {
    id: 94,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `A student is writing a research paper about renewable energy adoption. The student wants to emphasize the speed of recent change.\n\n• In 2010, solar energy provided less than 0.1% of global electricity.\n• By 2024, solar provided approximately 6% of global electricity.\n• The cost of solar panels dropped 89% between 2010 and 2024.\n• China, the United States, and India are the three largest solar energy producers.`,
    question: "Which choice most effectively uses information from the notes to accomplish the student's goal?",
    choices: [
      "A) China, the United States, and India lead the world in solar energy production, reflecting a global trend toward renewable energy sources.",
      "B) Solar energy is one of several renewable energy sources that countries around the world are investing in.",
      "C) Solar energy's share of global electricity has surged from less than 0.1% in 2010 to approximately 6% in 2024, a sixty-fold increase driven in part by an 89% drop in panel costs.",
      "D) The cost of solar panels has decreased significantly over the past decade, making solar energy more affordable for homeowners."
    ],
    correctAnswer: 2,
    explanation: "The student wants to emphasize speed of change. Only B highlights the dramatic growth (0.1% to 6%) with a time frame (2010-2024) and connects it to cost reduction, conveying rapid transformation (C)."
  },
  {
    id: 95,
    category: "Expression of Ideas",
    difficulty: "Hard",
    passage: `Text 1: Neuroscientist Antonio Damasio argues that emotions are essential to rational decision-making. His research on patients with damage to the ventromedial prefrontal cortex — a brain region linking emotion to cognition — shows that while these patients retain normal intelligence, they make catastrophically poor life decisions. Damasio concludes that \"gut feelings\" are not obstacles to reason but necessary inputs to it.\n\nText 2: Behavioral economist Daniel Kahneman distinguishes between two cognitive systems: System 1 (fast, intuitive, emotional) and System 2 (slow, deliberate, logical). While Kahneman acknowledges that System 1 is essential for daily functioning, he documents dozens of systematic biases it produces — from anchoring to availability bias — and argues that better decisions typically require engaging System 2 to override emotional impulses.`,
    question: "Damasio would most likely respond to Kahneman's framework by arguing that:",
    choices: [
      "A) System 2 thinking is always superior to System 1 thinking.",
      "B) overriding emotional input entirely would impair rather than improve decision quality.",
      "C) the biases Kahneman identifies are actually rare in real-world settings.",
      "D) Kahneman's research methodology is fundamentally flawed."
    ],
    correctAnswer: 1,
    explanation: "Damasio's core argument is that emotions are 'necessary inputs' to reason, and patients without emotional input make 'catastrophically poor decisions.' He would counter Kahneman's suggestion to override emotions by arguing this would impair decisions (B)."
  },
  {
    id: 96,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `Throughout the 19th century, doctors dismissed the idea that handwashing could prevent disease. When Hungarian physician Ignaz Semmelweis demonstrated in 1847 that handwashing with chlorinated lime solution dramatically reduced maternal mortality, the medical establishment rejected his findings. Semmelweis was ridiculed, lost his position, and eventually died in an asylum. Decades later, Louis Pasteur's germ theory vindicated Semmelweis's work, and handwashing became standard medical practice.`,
    question: "The author would most likely agree with which statement?",
    choices: [
      "A) Scientific institutions always quickly adopt evidence-based practices.",
      "B) Valid scientific findings can be rejected by the establishment before eventually being accepted.",
      "C) Modern medicine no longer resists new ideas the way it did in the 19th century.",
      "D) Pasteur deserves more credit than Semmelweis for promoting handwashing."
    ],
    correctAnswer: 1,
    explanation: "The passage tells a story of correct findings being rejected then vindicated decades later. This directly supports the idea that valid science can face institutional resistance before acceptance (D). A is contradicted by the passage."
  },

  // --- Mixed categories, varied difficulty ---
  {
    id: 97,
    category: "Craft and Structure",
    difficulty: "Easy",
    passage: `The village had exactly one doctor, one school, one church, and one bar. On any given evening, at least three of these four institutions were addressing the same problem.`,
    question: "The tone of the passage is best described as:",
    choices: [
      "A) tragic and despairing.",
      "B) clinically objective.",
      "C) nostalgic and sentimental.",
      "D) wryly humorous."
    ],
    correctAnswer: 3,
    vocabWords: [{"word":"wryly","definition":"in a way that expresses dry, often ironic humor"}],
    explanation: "The passage sets up a factual-sounding list, then delivers a punchline implying the village has a major problem (likely alcoholism). This deadpan delivery of a dark observation is wryly humorous (D)."
  },
  {
    id: 98,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `Researchers studying the placebo effect found that the color of a pill influences its perceived effectiveness. In clinical trials, blue pills were more effective as sedatives than red pills, while red pills were more effective as stimulants. Larger pills produced stronger placebo effects than smaller ones, and capsules outperformed tablets. Most strikingly, placebo injections were more effective than placebo pills, and placebo surgeries were more effective than placebo injections.`,
    question: "The passage presents the examples in an order that primarily serves to:",
    choices: [
      "A) demonstrate an escalating pattern where more invasive placebos produce stronger effects.",
      "B) rank medical treatments from least to most expensive.",
      "C) argue that doctors should prescribe placebos instead of real medication.",
      "D) prove that all medical treatments are essentially placebos."
    ],
    correctAnswer: 0,
    vocabWords: [{"word":"placebo","definition":"a treatment with no therapeutic effect, used as a control in testing new drugs"}],
    explanation: "The examples escalate: color → size → form (capsule vs tablet) → injection → surgery. Each step is more invasive/dramatic, and each produces a stronger effect. This escalating pattern is the structural principle (A)."
  },
  {
    id: 99,
    category: "Transitions",
    difficulty: "Medium",
    passage: `Many parents limit their children's screen time based on the assumption that excessive device use harms cognitive development. _______ a 2024 meta-analysis of 87 studies found no consistent evidence linking moderate screen time to negative cognitive outcomes in children, though the authors cautioned that content quality matters more than duration.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) To support this concern,",
      "B) However,",
      "C) Similarly,",
      "D) As a result,"
    ],
    correctAnswer: 1,
    explanation: "Parents assume screen time is harmful, but the study found no consistent evidence of harm — a direct contradiction. 'However' (B) signals this contrast."
  },
  {
    id: 100,
    category: "Expression of Ideas",
    difficulty: "Hard",
    passage: `Text 1: Political philosopher John Rawls proposed the \"veil of ignorance\" thought experiment: if you had to design a society's rules without knowing what position you'd hold in it — your race, gender, wealth, abilities — you would design a system that protects the most vulnerable, because you might end up being one of them. Rawls argued this produces the most just society.\n\nText 2: Philosopher Robert Nozick countered that Rawls's framework ignores how things are acquired. If someone earns wealth through legitimate means — talent, hard work, voluntary exchange — taking it through redistribution violates their rights, regardless of what a hypothetical person behind a veil might prefer. Nozick argued that justice is about respecting the process, not engineering the outcome.`,
    question: "The fundamental disagreement between Rawls and Nozick concerns:",
    choices: [
      "A) whether wealthy people work harder than poor people.",
      "B) whether thought experiments are valid philosophical tools.",
      "C) whether government should exist at all.",
      "D) whether justice should be defined by outcomes or by the processes that produce them."
    ],
    correctAnswer: 3,
    vocabWords: [{"word":"veil of ignorance","definition":"a thought experiment where decision-makers don't know their own position in society"},{"word":"redistribution","definition":"the transfer of income or wealth from some individuals to others through social mechanisms"}],
    explanation: "Rawls focuses on outcomes (protect the vulnerable, design fair results). Nozick focuses on process (respect how things were acquired). Their core disagreement is outcomes vs. process (D)."
  },

  // ========== BATCH 101-125 ==========

  {
    id: 101,
    category: "Craft and Structure",
    difficulty: "Easy",
    passage: `Geologists studying the Channeled Scablands of eastern Washington long struggled to explain the region's bizarre landscape — enormous dry waterfalls, deep coulees carved into basalt, and massive boulders deposited miles from any river. In the 1920s, J Harlen Bretz proposed that a catastrophic flood had sculpted the terrain, but his peers found the idea preposterous. Decades later, satellite imagery confirmed that a glacial lake had indeed burst its ice dam, releasing a wall of water that reshaped the landscape in days.`,
    question: "As used in the passage, 'preposterous' most nearly means:",
    choices: [
      "A) dangerous",
      "B) innovative",
      "C) absurd",
      "D) complicated"
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"preposterous","definition":"contrary to reason or common sense; utterly absurd"},{"word":"coulees","definition":"deep ravines, often dry, formed by running water"}],
    explanation: "Bretz's peers rejected his flood theory. 'Preposterous' means absurd or ridiculous — they found the idea too extreme to believe (C)."
  },
  {
    id: 102,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `A team of marine ecologists tracked the foraging behavior of albatrosses fitted with GPS transmitters. Birds nesting on remote Pacific islands routinely flew over 600 kilometers in a single foraging trip, covering distances that would seem energetically impossible for most birds. The researchers discovered that albatrosses exploit a flight technique called dynamic soaring, using wind gradients above ocean waves to travel vast distances with almost no flapping. Heart-rate monitors confirmed that the birds' metabolic expenditure during soaring was barely above resting levels.`,
    question: "Which finding from the study most directly explains how albatrosses achieve their extreme foraging range?",
    choices: [
      "A) Albatrosses nest on remote Pacific islands far from food sources.",
      "B) GPS transmitters recorded distances exceeding 600 kilometers per trip.",
      "C) Heart-rate monitors showed metabolic expenditure during soaring was near resting levels, indicating minimal energy cost.",
      "D) Most birds would find such distances energetically impossible."
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"dynamic soaring","definition":"a flight technique that uses wind speed differences at different altitudes to gain energy"}],
    explanation: "The question asks what explains the extreme range. The heart-rate data proves that soaring costs almost no energy, directly explaining how they fly so far without exhaustion (C). A and B describe the phenomenon, not the explanation. D is about other birds."
  },
  {
    id: 103,
    category: "Transitions",
    difficulty: "Easy",
    passage: `The Arctic fox changes its fur color with the seasons, turning white in winter to blend with snow and brown in summer to match the tundra. _______ this camouflage helps the fox both avoid predators and sneak up on prey.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) In either case,",
      "B) Nevertheless,",
      "C) By contrast,",
      "D) Previously,"
    ],
    correctAnswer: 0,
    explanation: "'In either case' (A) correctly links both seasonal fur colors (white or brown) to the same functional benefit (camouflage). The sentence explains that regardless of season, the color change serves the same purpose."
  },
  {
    id: 104,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `A student is writing about the decline of local newspapers for a journalism class. The student wants to connect the decline to a specific civic consequence.\n\n• Since 2005, over 2,500 newspapers in the United States have closed.\n• Communities that lose their local newspaper see a measurable decline in voter turnout.\n• Digital news sites have not fully replaced the local reporting capacity of newspapers.\n• Newspaper closures disproportionately affect rural communities.`,
    question: "Which choice most effectively uses information from the notes to accomplish the student's goal?",
    choices: [
      "A) The closure of over 2,500 U.S. newspapers since 2005 has had civic consequences: communities that lose their paper see voter turnout measurably decline, suggesting local journalism plays a vital role in democratic participation.",
      "B) Digital news sites cannot fully replace local newspapers, which is a problem for journalism.",
      "C) Over 2,500 newspapers have closed since 2005, and rural communities have been most affected by these closures.",
      "D) Newspaper closures are a major trend in the American media landscape and affect many communities."
    ],
    correctAnswer: 0,
    explanation: "The student wants to connect decline to a civic consequence. Only C links the closures (decline) directly to voter turnout (civic consequence) and draws the broader implication about democracy (A)."
  },
  {
    id: 105,
    category: "Standard English Conventions",
    difficulty: "Medium",
    passage: `The novelist Toni Morrison, whose works explore the African American experience with lyrical prose and unflinching _______ remains one of the most celebrated authors in American literary history.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) honesty,",
      "B) honesty.",
      "C) honesty",
      "D) honesty;"
    ],
    correctAnswer: 0,
    explanation: "The clause 'whose works explore...honesty' is a nonrestrictive relative clause that interrupts the main sentence. It opened with a comma after 'Morrison,' so it must close with a comma: 'honesty,' (A)."
  },
  {
    id: 106,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `Linguist John McWhorter argues that texting is not degrading the English language but rather constitutes a new form of linguistic expression — \"fingered speech\" — that follows its own consistent rules and conventions. He notes that abbreviations like \"lol\" and \"brb\" function as pragmatic markers similar to discourse particles in spoken language, signaling tone rather than literal meaning. McWhorter points out that every generation has accused the next of corrupting language, yet the language has continued to evolve without collapsing.`,
    question: "McWhorter would most likely respond to a critic who claims texting is ruining English by arguing that:",
    choices: [
      "A) texting abbreviations are too informal for any serious context.",
      "B) young people should be taught proper grammar instead of texting conventions.",
      "C) the history of language shows that fears of linguistic corruption are consistently unfounded.",
      "D) texting will eventually replace spoken language entirely."
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"pragmatic markers","definition":"linguistic elements that help organize discourse or signal the speaker's attitude"},{"word":"discourse particles","definition":"short words or phrases that structure conversation (like 'well,' 'you know')"}],
    explanation: "McWhorter's core argument is that every generation fears language corruption, yet language endures. He would respond to a critic by pointing to this historical pattern (B). A and C contradict his position, D is an extreme claim he doesn't make."
  },
  {
    id: 107,
    category: "Craft and Structure",
    difficulty: "Medium",
    passage: `The restaurant's menu described its chicken as \"farm-fresh,\" its vegetables as \"locally sourced,\" and its bread as \"artisanal.\" The chicken came frozen from a distributor in Nebraska. The vegetables arrived in crates stamped with the name of an industrial farm in Mexico. The bread was delivered pre-sliced in plastic bags by the same company that supplied the school cafeteria across the street.`,
    question: "The author structures the passage to:",
    choices: [
      "A) celebrate the restaurant's commitment to quality ingredients.",
      "B) explain why restaurant food costs more than home-cooked meals.",
      "C) systematically contrast the restaurant's marketing language with the reality of its sourcing.",
      "D) argue that all restaurants mislead their customers."
    ],
    correctAnswer: 2,
    explanation: "Each menu claim (farm-fresh, locally sourced, artisanal) is immediately followed by a contradicting fact. This systematic juxtaposition of marketing vs. reality is the structural principle (C). D is too broad."
  },
  {
    id: 108,
    category: "Information and Ideas",
    difficulty: "Easy",
    passage: `Emperor penguins are the only warm-blooded animal that breeds during the Antarctic winter, enduring temperatures as low as minus 60 degrees Celsius and winds exceeding 200 kilometers per hour. Males incubate a single egg on their feet for approximately 65 days while females hunt at sea. To conserve heat, the males huddle together in groups of up to several thousand, rotating positions so that each penguin eventually reaches the warm center.`,
    question: "According to the passage, male emperor penguins conserve heat by:",
    choices: [
      "A) huddling together and rotating positions within the group.",
      "B) building nests from available materials.",
      "C) migrating to warmer regions during the coldest months.",
      "D) taking turns incubating the egg with females."
    ],
    correctAnswer: 0,
    explanation: "The passage explicitly states males 'huddle together in groups...rotating positions so that each penguin eventually reaches the warm center' (A). The other choices are not mentioned."
  },
  {
    id: 109,
    category: "Transitions",
    difficulty: "Medium",
    passage: `The city's new congestion pricing policy charges drivers $15 to enter the downtown core during peak hours. Early data shows that traffic volume has decreased by 22% in the affected zone. _______ public transit ridership has increased by 18%, with bus speeds improving by nearly 30% due to reduced road congestion.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) Despite this,",
      "B) Nevertheless,",
      "C) In contrast,",
      "D) Correspondingly,"
    ],
    correctAnswer: 3,
    explanation: "'Correspondingly' (D) signals that the transit increase is a logically related outcome of the traffic decrease — both are effects of the same policy. 'Despite this' and 'Nevertheless' imply contradiction, which doesn't fit."
  },
  {
    id: 110,
    category: "Standard English Conventions",
    difficulty: "Hard",
    passage: `The collection of rare manuscripts, which the library acquired through a series of estate sales spanning three _______ represents one of the most significant additions to its holdings in the past century.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) decades;",
      "B) decades,",
      "C) decades",
      "D) decades."
    ],
    correctAnswer: 1,
    explanation: "The clause 'which the library acquired...decades' is a nonrestrictive relative clause. It must be closed with a comma to complete the pair that began after 'manuscripts.' 'Decades,' (B) is correct."
  },
  {
    id: 111,
    category: "Craft and Structure",
    difficulty: "Hard",
    passage: `In her 1929 essay, Virginia Woolf argued that a woman must have \"money and a room of her own\" to write fiction. While often read as a simple plea for financial independence, Woolf's argument is more layered: the room represents not just physical space but psychological freedom — the ability to think without interruption, to fail without consequence, and to develop ideas without the pressure of immediate utility. The money, similarly, is less about wealth than about the absence of anxiety.`,
    question: "The passage suggests that common interpretations of Woolf's argument are:",
    choices: [
      "A) entirely wrong and should be discarded.",
      "B) the result of deliberate misrepresentation by literary critics.",
      "C) overly focused on psychological rather than practical concerns.",
      "D) accurate but limited, missing the deeper symbolic meaning."
    ],
    correctAnswer: 3,
    explanation: "The passage says the essay is 'often read as a simple plea for financial independence' then explains 'Woolf's argument is more layered.' This frames common readings as partially right but missing the deeper meaning (D). A is too extreme — they're not 'entirely wrong.'"
  },
  {
    id: 112,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `Psychologists conducted an experiment in which participants were shown a video of a car accident and then asked to estimate the speed of the vehicles. The wording of the question significantly affected responses: when asked how fast the cars were going when they \"smashed\" into each other, participants estimated an average of 41 mph. When the word \"contacted\" was used instead, the average estimate dropped to 31 mph. A week later, participants who heard \"smashed\" were also more likely to report seeing broken glass — even though there was none in the video.`,
    question: "The experiment most directly demonstrates that:",
    choices: [
      "A) the language used in questions can distort both estimates and memories.",
      "B) car accidents are difficult to observe accurately.",
      "C) eyewitness testimony is always unreliable.",
      "D) participants deliberately lied about what they saw."
    ],
    correctAnswer: 0,
    vocabWords: [{"word":"misinformation effect","definition":"the tendency for post-event information to alter memories of the original event"}],
    explanation: "The word choice ('smashed' vs 'contacted') changed both speed estimates and false memory of broken glass. This shows language distorts estimates and memories (A). B is too absolute, B misses the point, D is unsupported."
  },
  {
    id: 113,
    category: "Expression of Ideas",
    difficulty: "Hard",
    passage: `Text 1: Sociologist Robert Putnam documented a decades-long decline in American civic participation — fewer people joining clubs, attending community meetings, or even having dinner with neighbors. He attributed this decline primarily to television, suburban sprawl, and generational change, arguing that the loss of \"social capital\" weakens democratic institutions.\n\nText 2: Sociologist Claude Fischer challenged Putnam's narrative, arguing that Americans have not become less social but have shifted how they socialize. Rather than joining formal organizations, people maintain networks through phone calls, travel, and — increasingly — digital communication. Fischer contends that Putnam conflated one particular style of socializing with sociality itself.`,
    question: "Fischer's critique of Putnam centers on the claim that Putnam:",
    choices: [
      "A) provided insufficient statistical evidence for his conclusions.",
      "B) ignored the role of television in changing social habits.",
      "C) exaggerated the importance of democratic institutions.",
      "D) mistook a change in the form of social connection for a decline in its substance."
    ],
    correctAnswer: 3,
    vocabWords: [{"word":"social capital","definition":"networks of relationships that enable a society to function effectively"},{"word":"conflated","definition":"combined two or more concepts into one, treating distinct things as identical"}],
    explanation: "Fischer says Putnam 'conflated one particular style of socializing with sociality itself' — meaning Putnam saw a shift in form (how people socialize) as a decline in substance (whether they socialize). This is a form vs. substance argument (D)."
  },
  {
    id: 114,
    category: "Standard English Conventions",
    difficulty: "Easy",
    passage: `The coral reef ecosystem, one of the most biodiverse environments on _______ supports approximately 25% of all known marine species despite covering less than 1% of the ocean floor.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) Earth.",
      "B) Earth,",
      "C) Earth;",
      "D) Earth"
    ],
    correctAnswer: 1,
    explanation: "'One of the most biodiverse environments on Earth' is an appositive phrase renaming 'coral reef ecosystem.' It needs a closing comma (B) to pair with the comma after 'ecosystem' and complete the interruption before the main verb 'supports.'"
  },
  {
    id: 115,
    category: "Craft and Structure",
    difficulty: "Easy",
    passage: `The town's annual chili cook-off had been a genteel affair for decades — neighbors sampling each other's recipes, exchanging compliments, awarding a modest ribbon. That changed when a retired chemistry professor entered a habanero-ghost pepper hybrid that sent three judges to the hospital and prompted the fire department to establish a decontamination station in the parking lot.`,
    question: "The tone of the passage shifts from:",
    choices: [
      "A) scientific to emotional.",
      "B) critical to supportive.",
      "C) calm and pleasant to chaotic and alarming.",
      "D) formal to informal."
    ],
    correctAnswer: 2,
    explanation: "The first sentence describes a 'genteel' event with compliments and ribbons (calm/pleasant). The second sentence introduces hospitalization and a decontamination station (chaotic/alarming). The shift is from calm to chaotic (C)."
  },
  {
    id: 116,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `Economists studying the impact of minimum wage increases have produced contradictory findings. A landmark 1994 study by Card and Krueger found that a minimum wage increase in New Jersey did not reduce employment at fast-food restaurants compared to neighboring Pennsylvania. However, a 2019 study using more granular payroll data found that while total employment remained stable, hours per worker decreased significantly — meaning the same number of people were employed but each worked fewer hours. Total labor income in affected businesses declined by 1.2%.`,
    question: "The 2019 study is best understood as:",
    choices: [
      "A) a complete refutation of Card and Krueger's findings.",
      "B) confirmation that minimum wage increases have no negative effects.",
      "C) evidence that employment counts alone may mask negative effects on workers' total earnings.",
      "D) proof that fast-food restaurants cannot afford higher wages."
    ],
    correctAnswer: 2,
    explanation: "The 2019 study found employment stayed stable (consistent with Card/Krueger) BUT hours and total income declined. This means looking at employment alone misses the full picture — hours reduction is a hidden negative effect (C). It's not a complete refutation (A) since employment data agreed."
  },
  {
    id: 117,
    category: "Transitions",
    difficulty: "Hard",
    passage: `The prevailing model of language acquisition holds that children learn grammar through exposure and imitation. Linguist Noam Chomsky challenged this view, arguing that the speed and uniformity with which children worldwide acquire complex grammatical rules — often producing sentences they have never heard — suggests an innate grammatical capacity. _______ recent computational models have shown that statistical patterns in speech input alone can account for many of the grammatical generalizations children make, reigniting the debate.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) To illustrate,",
      "B) Consequently,",
      "C) Complicating Chomsky's position,",
      "D) In agreement,"
    ],
    correctAnswer: 2,
    explanation: "'Complicating Chomsky's position' (C) signals that the computational models introduce evidence that challenges (but doesn't refute) Chomsky's innate grammar theory. 'Consequently' would imply the models follow from Chomsky's argument, and 'In agreement' contradicts the actual relationship."
  },
  {
    id: 118,
    category: "Expression of Ideas",
    difficulty: "Easy",
    passage: `A student is writing a report about Mars exploration for an astronomy class. The student wants to convey the scale of the engineering challenge.\n\n• The Mars rover Perseverance weighs approximately 1,025 kilograms.\n• The rover was lowered to the Martian surface by a sky crane hovering on rocket thrusters.\n• Signals between Earth and Mars take 5 to 20 minutes each way.\n• Engineers could not control the landing in real time and had to pre-program the entire sequence.`,
    question: "Which choice most effectively uses information from the notes to accomplish the student's goal?",
    choices: [
      "A) Landing a 1,025-kilogram rover on Mars required lowering it by rocket-powered sky crane through a fully pre-programmed sequence, since the 5-to-20-minute signal delay made real-time control impossible.",
      "B) Mars is very far from Earth, and signals take between 5 and 20 minutes to travel between the two planets.",
      "C) The Perseverance rover weighs about 1,025 kilograms and was delivered to Mars by a sky crane.",
      "D) Perseverance is one of several rovers that have successfully landed on Mars."
    ],
    correctAnswer: 0,
    explanation: "The student wants to convey engineering challenge. C combines the weight, the sky crane method, and the signal delay constraint into a single statement that highlights how difficult the engineering was (C). A and B mention facts without framing them as challenges."
  },
  {
    id: 119,
    category: "Standard English Conventions",
    difficulty: "Medium",
    passage: `The architect who designed the new city _______ drew inspiration from traditional Japanese gardens, incorporating water features, curved pathways, and carefully placed stones throughout the public spaces.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) library",
      "B) library;",
      "C) library,",
      "D) library:"
    ],
    correctAnswer: 0,
    explanation: "The clause 'who designed the new city library' is a restrictive (essential) relative clause — it identifies which architect. Restrictive clauses should NOT have commas. 'Library' (A) without punctuation is correct."
  },
  {
    id: 120,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `Researchers conducted a study on the relationship between sleep duration and academic performance among college students. Students who consistently slept 7-8 hours per night earned GPAs that were, on average, 0.4 points higher than students sleeping fewer than 6 hours. Interestingly, students sleeping more than 9 hours also performed worse than the 7-8 hour group, suggesting a U-shaped relationship rather than a simple linear one.`,
    question: "Which conclusion is best supported by the study's findings?",
    choices: [
      "A) There is an optimal range of sleep duration, and deviating in either direction is associated with lower performance.",
      "B) Sleeping more always leads to better academic performance.",
      "C) Students who sleep fewer than 6 hours should drop out of college.",
      "D) The study proves that sleep directly causes changes in GPA."
    ],
    correctAnswer: 0,
    explanation: "Both too little (<6h) and too much (>9h) sleep correlated with lower GPAs compared to 7-8h. This U-shaped pattern shows an optimal range with penalties in both directions (A). B is contradicted by the >9h finding. D confuses correlation with causation."
  },
  {
    id: 121,
    category: "Craft and Structure",
    difficulty: "Medium",
    passage: `Dr. Amara Osei had spent eleven years perfecting a vaccine that her institution's review board called \"theoretically elegant but practically undeliverable.\" She filed the paperwork anyway. Six months later, a clinical trial in rural Senegal showed a 94% efficacy rate. The review board issued a brief statement congratulating Dr. Osei on her \"promising preliminary results\" — the same board that had voted 7-1 to deny her funding three times.`,
    question: "The author includes the detail about the review board's voting history most likely to:",
    choices: [
      "A) praise the review board's rigorous standards.",
      "B) suggest Dr. Osei's success was due to luck rather than skill.",
      "C) argue that all review boards are corrupt.",
      "D) highlight the irony of the board claiming credit after repeatedly blocking the project."
    ],
    correctAnswer: 3,
    explanation: "The board denied funding 7-1 three times, then congratulated her after she succeeded anyway. The juxtaposition of obstruction and congratulation creates dramatic irony (C). A is too extreme, A misreads the tone, B is unsupported."
  },
  {
    id: 122,
    category: "Transitions",
    difficulty: "Easy",
    passage: `Hummingbirds have the highest metabolism of any bird species, with heart rates that can exceed 1,200 beats per minute during flight. _______ they must consume approximately half their body weight in nectar each day just to survive.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) In contrast,",
      "B) Surprisingly,",
      "C) As a result,",
      "D) Meanwhile,"
    ],
    correctAnswer: 2,
    explanation: "'As a result' (C) shows the causal relationship: the extreme metabolism (cause) requires massive food intake (effect). The nectar consumption is a direct consequence of the high metabolic rate."
  },
  {
    id: 123,
    category: "Standard English Conventions",
    difficulty: "Hard",
    passage: `The discovery of high concentrations of microplastics in Arctic sea ice — far from any industrial source — _______ scientists to reconsider their models of how ocean currents distribute pollutants across the globe.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) have compelled",
      "B) are compelling",
      "C) has compelled",
      "D) compelling"
    ],
    correctAnswer: 2,
    explanation: "The subject is 'The discovery' (singular). The clause between dashes is a parenthetical. 'Has compelled' (C) agrees with the singular subject and uses present perfect tense correctly."
  },
  {
    id: 124,
    category: "Information and Ideas",
    difficulty: "Easy",
    passage: `The Venus flytrap, native only to a small region of the Carolinas, captures insects using a sophisticated trapping mechanism. When a prey insect touches two or more trigger hairs within twenty seconds, the trap snaps shut in less than a tenth of a second. The plant then secretes digestive enzymes to extract nutrients from the insect over a period of five to twelve days.`,
    question: "According to the passage, the Venus flytrap's trap closes when:",
    choices: [
      "A) an insect lands anywhere on the plant.",
      "B) two or more trigger hairs are touched within twenty seconds.",
      "C) digestive enzymes are secreted by the plant.",
      "D) the plant detects vibrations in the soil."
    ],
    correctAnswer: 1,
    explanation: "The passage states the trap closes 'when a prey insect touches two or more trigger hairs within twenty seconds.' This is a direct textual detail (B)."
  },
  {
    id: 125,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `Text 1: Historian Frederick Jackson Turner argued in 1893 that the American frontier shaped the nation's democratic character. The constant availability of free land, Turner claimed, fostered individualism, self-reliance, and egalitarianism — qualities that distinguished American democracy from its European counterparts.\n\nText 2: Historian Patricia Nelson Limerick countered that Turner's frontier thesis romanticized a process of conquest and dispossession. The \"free land\" Turner celebrated was taken from Indigenous peoples through violence and treaty violations. Limerick argued that the frontier was not a story of democratic triumph but of racial exclusion and environmental exploitation.`,
    question: "Which choice best describes the relationship between the two texts?",
    choices: [
      "A) Text 2 provides statistical evidence that supports the claims in Text 1.",
      "B) Text 2 agrees with Text 1's conclusion but proposes a different cause.",
      "C) Text 2 discusses a completely different time period than Text 1.",
      "D) Text 2 offers a fundamentally different interpretation of the same historical process discussed in Text 1."
    ],
    correctAnswer: 3,
    explanation: "Both texts discuss the American frontier. Turner sees it as democratic triumph; Limerick sees it as conquest and exclusion. Same topic, fundamentally different interpretation (D)."
  },

  // ========== BATCH 126-150 ==========

  {
    id: 126,
    category: "Craft and Structure",
    difficulty: "Hard",
    passage: `The aid agency's annual report featured glossy photographs of smiling children, uplifting success stories, and a prominent graph showing donations climbing steadily upward. Buried in a footnote on page 47 was the disclosure that administrative overhead consumed 68% of all donations, and that the organization had been under investigation by three separate regulatory bodies for the past eighteen months.`,
    question: "The contrast between the report's main content and its footnote primarily suggests that:",
    choices: [
      "A) the report was designed to emphasize positive narratives while obscuring unfavorable information.",
      "B) footnotes are the most important part of any report.",
      "C) aid agencies are always fraudulent.",
      "D) regulatory investigations are a normal part of nonprofit operations."
    ],
    correctAnswer: 0,
    explanation: "Glossy photos and success stories dominate the report while damaging facts are hidden in a footnote. This structural choice suggests the report was designed to highlight positives and hide negatives (C). B is too extreme."
  },
  {
    id: 127,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `A 2023 study examined whether green spaces in cities reduce crime rates. Researchers compared neighborhoods that received new parks or community gardens with matched control neighborhoods that did not. After three years, neighborhoods with new green spaces showed a 14% reduction in violent crime and a 9% reduction in property crime. However, the effect was concentrated within a two-block radius of the green space and diminished to statistical insignificance beyond four blocks.`,
    question: "The study's findings about the geographic range of the effect suggest that:",
    choices: [
      "A) green spaces reduce crime across entire cities.",
      "B) property crime is unaffected by green spaces.",
      "C) the crime-reducing effect is localized and does not extend broadly through a neighborhood.",
      "D) four blocks is too small an area to measure crime accurately."
    ],
    correctAnswer: 2,
    explanation: "The effect was 'concentrated within a two-block radius' and 'diminished to statistical insignificance beyond four blocks.' This means the benefit is localized, not citywide (B). A contradicts the data, B is wrong (9% reduction in property crime was found)."
  },
  {
    id: 128,
    category: "Transitions",
    difficulty: "Medium",
    passage: `For decades, conservationists focused on protecting individual endangered species — the giant panda, the California condor, the black rhinoceros. _______ many ecologists now argue that preserving entire ecosystems is more effective, since protecting a habitat automatically safeguards the thousands of species that depend on it.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) Similarly,",
      "B) More recently,",
      "C) For example,",
      "D) As a result,"
    ],
    correctAnswer: 1,
    explanation: "'More recently' (B) signals a temporal shift from an older approach (individual species) to a newer one (entire ecosystems). 'Similarly' implies sameness rather than evolution, 'For example' doesn't introduce a new approach."
  },
  {
    id: 129,
    category: "Standard English Conventions",
    difficulty: "Easy",
    passage: `The archaeological site near the river _______ artifacts dating back more than 4,000 years, including pottery fragments, stone tools, and several bronze figurines.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) contain",
      "B) contains",
      "C) containing",
      "D) have contained"
    ],
    correctAnswer: 1,
    explanation: "'The archaeological site' is a singular subject requiring a singular verb. 'Contains' (B) is correct. 'Contain' is plural, 'containing' creates a fragment, 'have contained' is plural."
  },
  {
    id: 130,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `Anthropologist Robin Dunbar proposed that the human brain can maintain stable social relationships with approximately 150 people — a figure known as \"Dunbar's number.\" He derived this estimate by correlating primate brain size with social group size and extrapolating to humans. Critics note that the correlation between brain size and group size in primates explains only 52% of the variation, and that modern communication technologies may have altered the cognitive constraints Dunbar identified. A 2021 study found that active social media users maintained meaningful interactions with a median of 4.1 people — far fewer than 150.`,
    question: "The 2021 study finding is most relevant to the debate because it:",
    choices: [
      "A) suggests that the number of truly meaningful relationships may be much smaller than Dunbar's estimate, regardless of technology.",
      "B) proves that social media has destroyed human social capacity.",
      "C) confirms that Dunbar's number of 150 is exactly correct.",
      "D) demonstrates that primates and humans socialize identically."
    ],
    correctAnswer: 0,
    vocabWords: [{"word":"extrapolating","definition":"extending the application of a conclusion beyond the range of original data"}],
    explanation: "The study found people maintain meaningful interactions with only ~4 people, far below 150. This challenges Dunbar's estimate by suggesting the number of deep relationships is much smaller (C). A contradicts the data, B is too extreme."
  },
  {
    id: 131,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `A student is writing about the discovery of cosmic microwave background radiation for a physics class. The student wants to emphasize the accidental nature of the discovery.\n\n• In 1965, Arno Penzias and Robert Wilson were calibrating a radio antenna at Bell Labs.\n• They detected persistent background noise they could not eliminate.\n• After ruling out equipment malfunction and pigeon droppings, they realized the noise was coming from every direction in the sky.\n• Physicist Robert Dicke, who had been independently searching for this radiation, confirmed it was the afterglow of the Big Bang.`,
    question: "Which choice most effectively uses information from the notes to accomplish the student's goal?",
    choices: [
      "A) While troubleshooting persistent noise in a radio antenna — even checking for pigeon droppings — Penzias and Wilson stumbled upon the cosmic microwave background, the afterglow of the Big Bang, entirely by accident.",
      "B) Robert Dicke was independently searching for cosmic microwave background radiation when Penzias and Wilson found it.",
      "C) Penzias and Wilson won the Nobel Prize for their work in radio astronomy at Bell Labs.",
      "D) The cosmic microwave background is important evidence supporting the Big Bang theory of the universe's origin."
    ],
    correctAnswer: 0,
    explanation: "The student wants to emphasize the accidental nature. C highlights the troubleshooting process (noise, pigeon droppings) and uses 'stumbled upon' and 'entirely by accident' to frame the discovery as unintentional (A)."
  },
  {
    id: 132,
    category: "Craft and Structure",
    difficulty: "Easy",
    passage: `The committee chair opened the meeting by praising the team's \"unprecedented synergy\" and \"transformational paradigm shift.\" The intern in the corner wrote in her notebook: \"Nothing has changed. They moved the coffee machine.\"`,
    question: "The intern's note functions primarily as:",
    choices: [
      "A) a serious critique of organizational management theory.",
      "B) evidence that the intern does not understand corporate terminology.",
      "C) a suggestion for improving workplace efficiency.",
      "D) a deflating counterpoint that undercuts the chair's grand language."
    ],
    correctAnswer: 3,
    vocabWords: [{"word":"paradigm shift","definition":"a fundamental change in approach or underlying assumptions"}],
    explanation: "The chair uses inflated corporate language ('synergy,' 'paradigm shift'). The intern's blunt observation that only the coffee machine moved deflates this language, revealing the gap between rhetoric and reality (D)."
  },
  {
    id: 133,
    category: "Standard English Conventions",
    difficulty: "Medium",
    passage: `The filmmaker, known for her innovative use of natural light and long unbroken _______ has cited the Italian neorealist directors of the 1940s as her primary artistic influences.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) takes",
      "B) takes.",
      "C) takes;",
      "D) takes,"
    ],
    correctAnswer: 3,
    explanation: "'Known for her innovative use...takes' is a participial phrase set off by commas. The opening comma appears after 'filmmaker,' so a closing comma is needed after 'takes' (D) to complete the pair."
  },
  {
    id: 134,
    category: "Information and Ideas",
    difficulty: "Easy",
    passage: `Octopuses have three hearts: two branchial hearts that pump blood through the gills, and one systemic heart that circulates blood to the rest of the body. When an octopus swims, the systemic heart stops beating, which is why these animals prefer crawling — swimming exhausts them quickly.`,
    question: "The passage explains the octopus's preference for crawling over swimming by noting that:",
    choices: [
      "A) crawling requires fewer tentacles than swimming.",
      "B) their gills function better when they are not in water.",
      "C) swimming causes the systemic heart to stop, leading to rapid exhaustion.",
      "D) they have only one heart."
    ],
    correctAnswer: 2,
    explanation: "The passage states that when swimming, the systemic heart stops, 'which is why these animals prefer crawling — swimming exhausts them quickly.' The stopped heart during swimming causes exhaustion (C). D is factually wrong — they have three."
  },
  {
    id: 135,
    category: "Transitions",
    difficulty: "Hard",
    passage: `Philosopher Hannah Arendt distinguished between labor (repetitive biological necessities like eating and cleaning), work (creating durable objects and institutions), and action (engaging with others in public life to shape shared reality). She argued that modernity has elevated labor above all else, reducing citizens to consumers focused on biological needs. _______ Arendt warned that when action disappears from public life, so does the capacity for genuine political freedom.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) For example,",
      "B) In Arendt's view,",
      "C) Contradicting this claim,",
      "D) To clarify,"
    ],
    correctAnswer: 1,
    explanation: "'In Arendt's view' (B) continues presenting her argument, introducing a further consequence she identified. 'For example' would introduce an illustration, not a consequence. 'Contradicting this claim' reverses direction incorrectly."
  },
  {
    id: 136,
    category: "Expression of Ideas",
    difficulty: "Hard",
    passage: `Text 1: Psychologist Jonathan Haidt argues that social media is causing a mental health crisis among adolescents. He cites rising rates of anxiety, depression, and self-harm that correlate strongly with smartphone adoption, and argues that the addictive design of platforms — endless scrolling, social comparison, notification loops — is particularly damaging to developing brains.\n\nText 2: Psychologist Candice Odgers contends that the evidence linking social media to adolescent mental health problems is weaker than Haidt suggests. She notes that most large-scale studies find only small correlations, and that the timing of the mental health decline predates widespread social media use. Odgers argues that focusing on phones distracts from more significant factors: economic inequality, academic pressure, and reduced access to mental health care.`,
    question: "Odgers would most likely argue that Haidt's focus on social media is problematic because it:",
    choices: [
      "A) diverts attention from structural causes that may better explain the mental health trends.",
      "B) is based on data from too many countries.",
      "C) ignores the possibility that social media has any negative effects.",
      "D) relies exclusively on anecdotal evidence rather than empirical research."
    ],
    correctAnswer: 0,
    explanation: "Odgers argues that 'focusing on phones distracts from more significant factors: economic inequality, academic pressure, and reduced access to mental health care.' She thinks the phone focus diverts attention from structural causes (C). B is wrong — she doesn't say social media has zero effects."
  },
  {
    id: 137,
    category: "Craft and Structure",
    difficulty: "Medium",
    passage: `When nineteenth-century naturalist Alexander von Humboldt first proposed that the continents of South America and Africa had once been joined, citing the jigsaw-like fit of their coastlines and matching fossil records on both sides of the Atlantic, the scientific establishment dismissed him. The idea that continents could move seemed to violate basic physics. It took over a century and the discovery of plate tectonics to vindicate his observation.`,
    question: "The passage primarily serves to illustrate:",
    choices: [
      "A) how correct scientific observations can be rejected before the mechanism explaining them is understood.",
      "B) why plate tectonics is the most important theory in geology.",
      "C) that Alexander von Humboldt was the greatest scientist of the 19th century.",
      "D) why the scientific establishment always resists new ideas."
    ],
    correctAnswer: 0,
    explanation: "Humboldt's correct observation (continents were joined) was rejected because the mechanism (plate tectonics) wasn't yet known. This illustrates how valid observations can be dismissed without a known mechanism (B). D is too absolute ('always')."
  },
  {
    id: 138,
    category: "Standard English Conventions",
    difficulty: "Hard",
    passage: `It is the responsibility of each department head to ensure that _______ staff members complete the mandatory safety training before the end of the fiscal year.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) his or her",
      "B) their",
      "C) its",
      "D) there"
    ],
    correctAnswer: 1,
    explanation: "'Each department head' is singular but gender-neutral. In modern Standard English, 'their' (B) is the accepted singular gender-neutral pronoun. 'His or her' (A) is grammatically traditional but the SAT now accepts 'their.' 'Its' refers to non-human entities, 'there' is a location word."
  },
  {
    id: 139,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `Astronomers using the James Webb Space Telescope observed galaxies that existed just 300 million years after the Big Bang — far earlier than any previously detected. These galaxies were unexpectedly massive and well-organized, with defined spiral structures that existing models predicted should take at least a billion years to form. The observations have prompted cosmologists to reconsider the timeline of galaxy formation and the conditions that prevailed in the early universe.`,
    question: "The galaxies observed by JWST challenge existing models primarily because the galaxies:",
    choices: [
      "A) were too far away to observe clearly.",
      "B) matched existing predictions perfectly.",
      "C) contained no stars at all.",
      "D) appeared more structurally developed than models predicted for their age."
    ],
    correctAnswer: 3,
    explanation: "The galaxies were 'unexpectedly massive and well-organized' with structures that models said 'should take at least a billion years to form,' but they existed just 300 million years after the Big Bang. They were more developed than expected for their age (D)."
  },
  {
    id: 140,
    category: "Transitions",
    difficulty: "Easy",
    passage: `Japan's bullet trains, which can reach speeds of 320 kilometers per hour, maintain one of the best safety records in the world. _______ since the Shinkansen network began operation in 1964, there have been zero passenger fatalities caused by derailments or collisions.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) However,",
      "B) Indeed,",
      "C) Despite this,",
      "D) In other words,"
    ],
    correctAnswer: 1,
    explanation: "'Indeed' (B) intensifies the previous claim about safety by providing the specific supporting fact (zero fatalities). The second sentence reinforces rather than contradicts the first."
  },
  {
    id: 141,
    category: "Craft and Structure",
    difficulty: "Easy",
    passage: `The museum's new exhibit on ancient Egypt was, according to the curator, \"a once-in-a-generation opportunity to bring these treasures to the public.\" According to the museum's internal budget documents, it was a once-in-a-generation opportunity to sell $40 coffee mugs with hieroglyphics on them.`,
    question: "The author's juxtaposition of the curator's statement and the budget documents creates a tone that is:",
    choices: [
      "A) reverential and admiring.",
      "B) sardonic and skeptical.",
      "C) neutral and informative.",
      "D) confused and uncertain."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"sardonic","definition":"grimly mocking or cynical"}],
    explanation: "The passage pairs lofty language ('bring treasures to the public') with cynical reality ('sell $40 coffee mugs'), creating a sardonic/skeptical tone that questions the museum's true motives (B)."
  },
  {
    id: 142,
    category: "Standard English Conventions",
    difficulty: "Medium",
    passage: `Neither the CEO nor the board members _______ willing to accept responsibility for the data breach that exposed the personal information of over two million customers.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) was",
      "B) is",
      "C) has been",
      "D) were"
    ],
    correctAnswer: 3,
    explanation: "With 'neither...nor,' the verb agrees with the nearer subject. 'Board members' is plural and nearest, so 'were' (D) is correct."
  },
  {
    id: 143,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `Economist Daron Acemoglu argues that the impact of AI on labor markets will depend less on the technology itself than on the institutional choices societies make about its deployment. He distinguishes between \"automation\" (replacing human tasks with machines, reducing labor demand) and \"augmentation\" (enhancing human capabilities, increasing labor value). Acemoglu notes that current market incentives overwhelmingly favor automation because replacing workers reduces costs, while augmenting them creates diffuse, harder-to-capture benefits. Without policy intervention, he predicts AI will concentrate wealth rather than distribute it.`,
    question: "According to Acemoglu, the primary reason current AI development favors automation over augmentation is that:",
    choices: [
      "A) augmentation technology is more difficult to develop than automation technology.",
      "B) the economic incentives for cost reduction through worker replacement are stronger than those for enhancing worker productivity.",
      "C) workers prefer to be replaced rather than augmented.",
      "D) governments have already passed laws requiring automation."
    ],
    correctAnswer: 1,
    explanation: "Acemoglu says market incentives 'overwhelmingly favor automation because replacing workers reduces costs, while augmenting them creates diffuse, harder-to-capture benefits.' The incentive structure, not technical difficulty, drives the imbalance (B)."
  },
  {
    id: 144,
    category: "Expression of Ideas",
    difficulty: "Easy",
    passage: `A student is writing about bioluminescence for a biology class. The student wants to provide a vivid example.\n\n• Bioluminescence is the production of light by living organisms.\n• The deep-sea anglerfish uses a glowing lure to attract prey in total darkness.\n• Over 90% of deep-sea creatures produce their own light.\n• Fireflies use bioluminescence to attract mates.`,
    question: "Which choice most effectively uses information from the notes to accomplish the student's goal?",
    choices: [
      "A) In the pitch-black depths of the ocean, the anglerfish dangles a glowing lure — powered by bioluminescence — to attract unsuspecting prey directly into its jaws.",
      "B) Over 90% of deep-sea organisms are capable of producing their own light through bioluminescence.",
      "C) Bioluminescence occurs in many species, including fireflies and deep-sea creatures.",
      "D) Bioluminescence is the production of light by living organisms and serves various purposes."
    ],
    correctAnswer: 0,
    explanation: "The student wants a vivid example. C paints a specific, visual scene (pitch-black depths, dangling lure, unsuspecting prey, jaws) using the anglerfish as the example (C). The other choices are factual but not vivid."
  },
  {
    id: 145,
    category: "Craft and Structure",
    difficulty: "Medium",
    passage: `The pharmaceutical lobbyist sat across from the senator, his briefcase containing a study funded by his employer showing that the drug was safe, a check for the senator's reelection campaign, and a draft of the bill he wanted the senator to introduce. He opened with: \"I'm here because I care about patients.\"`,
    question: "The opening statement 'I'm here because I care about patients' is rendered ironic by:",
    choices: [
      "A) the preceding description of the briefcase's contents, which suggest financial and political motives.",
      "B) the senator's reaction to the statement.",
      "C) the lobbyist's professional qualifications.",
      "D) the scientific validity of the drug safety study."
    ],
    correctAnswer: 0,
    explanation: "The briefcase contains industry-funded research, a campaign check, and a pre-written bill — revealing motives of money and influence. 'I care about patients' is ironic against this backdrop (A)."
  },
  {
    id: 146,
    category: "Transitions",
    difficulty: "Medium",
    passage: `Traditional economic theory assumes that consumers make rational decisions based on complete information. _______ behavioral economists have demonstrated that real decision-making is heavily influenced by cognitive biases, emotional states, and the way choices are framed — factors that rational models fail to capture.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) To illustrate this point,",
      "B) As a consequence,",
      "C) In practice, however,",
      "D) Similarly,"
    ],
    correctAnswer: 2,
    explanation: "'In practice, however' (C) signals a contrast between theory (rational decisions) and what actually happens in practice (biased decisions). 'Similarly' and 'To illustrate' don't capture the theory-vs-practice contrast."
  },
  {
    id: 147,
    category: "Standard English Conventions",
    difficulty: "Easy",
    passage: `The two _______ proposals for the new community center were so different in scope and budget that the city council decided to table both and solicit new bids.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) architects",
      "B) architects'",
      "C) architect's",
      "D) architects's"
    ],
    correctAnswer: 1,
    explanation: "Two architects share ownership of their proposals. The plural possessive is formed by adding an apostrophe after the s: 'architects'' (C). 'Architect's' is singular possessive, 'architects's' is nonstandard."
  },
  {
    id: 148,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `Researchers studying the effectiveness of school uniform policies compared standardized test scores, attendance rates, and disciplinary incidents across 50 schools that adopted uniforms and 50 matched schools that did not. After controlling for socioeconomic factors, they found no statistically significant differences in any of the three measures. The study authors noted that uniform policies are often adopted alongside other reforms, making it difficult to isolate their independent effect.`,
    question: "The study's findings most directly suggest that:",
    choices: [
      "A) school uniforms definitely have no impact on student outcomes.",
      "B) the evidence does not support the claim that uniforms alone improve academic or behavioral outcomes.",
      "C) schools should immediately abandon uniform policies.",
      "D) socioeconomic factors have no influence on school performance."
    ],
    correctAnswer: 1,
    explanation: "The study found 'no statistically significant differences' after controlling for socioeconomics. This doesn't prove zero effect (A is too absolute), but it does show uniforms alone didn't produce measurable improvement (B)."
  },
  {
    id: 149,
    category: "Craft and Structure",
    difficulty: "Hard",
    passage: `Economist Ha-Joon Chang observes that every wealthy nation — including Britain, the United States, Germany, Japan, and South Korea — used protectionist trade policies, government subsidies, and state-directed industrial planning during its development phase. Once wealthy, however, these same nations advocated free trade and minimal government intervention for developing countries. Chang calls this \"kicking away the ladder\": climbing to prosperity using certain tools, then telling others they must not use those same tools.`,
    question: "Chang's metaphor of 'kicking away the ladder' most directly conveys:",
    choices: [
      "A) the technical complexity of international trade agreements.",
      "B) an optimistic view of global economic development.",
      "C) the superiority of free-market economics over protectionism.",
      "D) the hypocrisy of wealthy nations advising developing countries against strategies those nations themselves used to industrialize."
    ],
    correctAnswer: 3,
    vocabWords: [{"word":"protectionist","definition":"relating to the use of tariffs or quotas to shield domestic industries from foreign competition"}],
    explanation: "The 'ladder' metaphor means: climb up using protectionism, then remove the ladder (prohibit protectionism) for others. This directly conveys hypocrisy — using one strategy yourself while forbidding others from doing the same (D)."
  },
  {
    id: 150,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `A student is writing about the Dunning-Kruger effect for a psychology class. The student wants to explain the core finding with a clear example.\n\n• The Dunning-Kruger effect is a cognitive bias in which people with limited competence overestimate their abilities.\n• In the original 1999 study, participants scoring in the bottom quartile on logic tests estimated their performance at the 62nd percentile.\n• Meanwhile, top-performing participants slightly underestimated their abilities.\n• The researchers suggested that the skills needed to produce correct answers are the same skills needed to recognize what a correct answer looks like.`,
    question: "Which choice most effectively uses information from the notes to accomplish the student's goal?",
    choices: [
      "A) The Dunning-Kruger effect, identified in 1999, is a well-known cognitive bias studied in psychology.",
      "B) People who perform well on tests tend to underestimate their performance, while poor performers overestimate theirs.",
      "C) The Dunning-Kruger effect shows that everyone has cognitive biases that affect their self-assessment.",
      "D) In the original Dunning-Kruger study, participants who scored in the bottom quartile on logic tests believed they performed at the 62nd percentile — a dramatic overestimation rooted in the same lack of skill that caused their poor performance."
    ],
    correctAnswer: 3,
    explanation: "The student wants the core finding with a clear example. C gives the specific data (bottom quartile, 62nd percentile estimate) and connects it to the mechanism (lack of skill causes both poor performance and poor self-assessment) (D)."
  },

  // ========== BATCH 151-175 ==========

  {
    id: 151,
    category: "Craft and Structure",
    difficulty: "Easy",
    passage: `The scientist's findings were described in the press as \"groundbreaking\" and \"revolutionary.\" The scientist herself, in her published paper, used the phrase \"a modest contribution to existing literature that warrants further investigation.\"`,
    question: "The contrast between the press coverage and the scientist's own description suggests that:",
    choices: [
      "A) media reporting tends to amplify scientific findings beyond what researchers themselves claim.",
      "B) the scientist is being dishonest about her findings.",
      "C) the press accurately represents scientific discoveries.",
      "D) the scientist lacks confidence in her work."
    ],
    correctAnswer: 0,
    explanation: "The press uses 'groundbreaking' and 'revolutionary' while the scientist calls it 'a modest contribution.' The gap shows media amplification beyond the scientist's own claims (A)."
  },
  {
    id: 152,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `A controversial 2022 study claimed that a specific gut bacterium could predict clinical depression with 87% accuracy based on stool samples alone. However, the study used only 45 participants from a single hospital, all of whom were already diagnosed with depression, and compared them with healthy volunteers who were significantly younger and from different socioeconomic backgrounds. Three larger replication attempts, each with over 500 participants and more carefully matched controls, found no predictive relationship between the bacterium and depression.`,
    question: "The three replication attempts are significant because they suggest the original study's results were likely attributable to:",
    choices: [
      "A) confounding differences between the patient and control groups rather than a genuine biological relationship.",
      "B) the superior technology used in the original laboratory.",
      "C) the fact that gut bacteria are completely unrelated to mental health.",
      "D) the larger sample sizes used in the replications."
    ],
    correctAnswer: 0,
    vocabWords: [{"word":"confounding","definition":"a factor that distorts the apparent relationship between variables being studied"},{"word":"replication","definition":"the repetition of a study to verify its findings"}],
    explanation: "The original study had poorly matched controls (age, socioeconomic differences). Larger, better-matched studies found nothing. This pattern suggests the original result came from confounding group differences, not biology (B). C is too absolute."
  },
  {
    id: 153,
    category: "Transitions",
    difficulty: "Medium",
    passage: `The city installed 200 electric vehicle charging stations in public parking lots, expecting to meet growing demand from EV owners. _______ usage data after six months revealed that 73% of the stations were used fewer than twice per week, while the remaining 27% had consistent queues, suggesting that location — not quantity — was the primary barrier to adoption.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) Predictably,",
      "B) Unexpectedly,",
      "C) As hoped,",
      "D) For this reason,"
    ],
    correctAnswer: 1,
    explanation: "The city expected to meet demand, but the data revealed most stations were barely used while a few were overcrowded. This unexpected mismatch is best signaled by 'Unexpectedly' (B)."
  },
  {
    id: 154,
    category: "Standard English Conventions",
    difficulty: "Medium",
    passage: `The journalist who broke the story about the chemical _______ received death threats from company executives and was ultimately vindicated when federal investigators confirmed every detail of her reporting.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) spill",
      "B) spill,",
      "C) spill;",
      "D) spill."
    ],
    correctAnswer: 0,
    explanation: "'Who broke the story about the chemical spill' is a restrictive relative clause identifying which journalist. Restrictive clauses do not take commas. 'Spill' (A) without punctuation is correct."
  },
  {
    id: 155,
    category: "Expression of Ideas",
    difficulty: "Hard",
    passage: `Text 1: Philosopher Martha Nussbaum argues that emotions like compassion, indignation, and grief are not irrational distractions from justice but essential components of it. A legal system that ignores the emotional dimension of harm — that treats a murder merely as a rule violation rather than a devastating loss — fails to fully reckon with what justice requires.\n\nText 2: Legal scholar Richard Posner counters that introducing emotions into legal reasoning invites inconsistency and bias. Judges who rely on compassion may impose lighter sentences for sympathetic defendants and harsher ones for unsympathetic ones, producing outcomes that reflect personal sentiment rather than principled application of law.`,
    question: "Nussbaum would most likely respond to Posner's concern about inconsistency by arguing that:",
    choices: [
      "A) a legal system that achieves consistency by suppressing all emotional consideration of harm is consistent in the wrong way.",
      "B) inconsistency is a worse problem than the failure to account for human suffering.",
      "C) judges should never feel emotions when deciding cases.",
      "D) Posner's examples of sympathetic defendants are statistically rare."
    ],
    correctAnswer: 0,
    explanation: "Nussbaum believes ignoring emotions 'fails to fully reckon with what justice requires.' She would counter that Posner's consistency comes at the cost of ignoring genuine harm — consistent, but consistently missing what matters (A)."
  },
  {
    id: 156,
    category: "Craft and Structure",
    difficulty: "Medium",
    passage: `The retired general's memoir devoted 300 pages to his battlefield heroics and 2 pages to the civilian casualties his unit caused. The 2 pages were titled \"Regrettable Necessities.\"`,
    question: "The detail about the relative page counts and the chapter title most strongly suggests:",
    choices: [
      "A) the memoir minimizes responsibility for civilian harm while prioritizing self-aggrandizing narratives.",
      "B) civilian casualties are an unavoidable part of warfare.",
      "C) the general's military career was long and distinguished.",
      "D) publishers typically limit memoirs to a specific page count."
    ],
    correctAnswer: 0,
    vocabWords: [{"word":"self-aggrandizing","definition":"promoting oneself as being powerful or important"}],
    explanation: "300 pages on heroics vs. 2 on casualties, titled 'Regrettable Necessities' (a euphemism), suggests the memoir minimizes harm while maximizing self-glory (A)."
  },
  {
    id: 157,
    category: "Information and Ideas",
    difficulty: "Easy",
    passage: `The mantis shrimp possesses the most complex visual system ever discovered. While humans have three types of color receptors, the mantis shrimp has sixteen, enabling it to perceive ultraviolet and polarized light invisible to the human eye. Its eyes can move independently and are mounted on stalks, giving it 360-degree vision without moving its head.`,
    question: "The passage indicates that the mantis shrimp's visual system surpasses humans' primarily in:",
    choices: [
      "A) the speed at which it processes visual information.",
      "B) its ability to see in complete darkness.",
      "C) the number and range of color receptors and the independence of eye movement.",
      "D) the size of its eyes relative to its body."
    ],
    correctAnswer: 2,
    explanation: "The passage cites 16 vs. 3 color receptors, UV/polarized light perception, and independent eye movement as advantages. These relate to receptor range and eye independence (C). Speed, darkness, and eye size are not mentioned."
  },
  {
    id: 158,
    category: "Transitions",
    difficulty: "Easy",
    passage: `Most people assume that goldfish have a memory span of only a few seconds. _______ studies have shown that goldfish can remember information for at least five months and can be trained to navigate mazes, recognize their owners, and respond to specific musical cues.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) Confirming this belief,",
      "B) As a result,",
      "C) Similarly,",
      "D) In reality,"
    ],
    correctAnswer: 3,
    explanation: "'In reality' (D) signals that the common assumption is wrong, and the truth is different. The studies contradict the few-seconds myth."
  },
  {
    id: 159,
    category: "Standard English Conventions",
    difficulty: "Hard",
    passage: `The nonprofit organization, which _______ in three countries and employs over 200 people, announced plans to expand into Southeast Asia by the end of next year.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) operate",
      "B) operates",
      "C) operating",
      "D) are operating"
    ],
    correctAnswer: 1,
    explanation: "The subject is 'organization' (singular) inside a nonrestrictive relative clause. 'Operates' (B) is the singular present tense verb. 'Operate' is plural, 'operating' creates a fragment, 'are operating' is plural."
  },
  {
    id: 160,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `Historians studying the Black Death (1347-1351) have traditionally estimated that it killed 30-60% of Europe's population. A 2022 study using pollen data from lake sediments across Europe found that agricultural disruption — a proxy for population decline — varied enormously by region. Some areas showed a 90% drop in farming activity, while others showed almost no change at all. The researchers concluded that the plague's impact was far more geographically uneven than previously understood.`,
    question: "The pollen data is valuable to the researchers because it:",
    choices: [
      "A) directly measures how many people died from the plague.",
      "B) provides an indirect measure of population change through its correlation with agricultural activity.",
      "C) proves that the Black Death did not actually reach all parts of Europe.",
      "D) confirms the traditional estimate of 30-60% mortality."
    ],
    correctAnswer: 1,
    explanation: "Pollen data tracks farming activity, which serves as 'a proxy for population decline' — an indirect measure. It doesn't directly count deaths (A) and it challenges rather than confirms the traditional estimate (D). The correct answer is (B)."
  },
  {
    id: 161,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `A student is writing about the prisoner's dilemma for a game theory class. The student wants to explain why mutual cooperation is difficult to achieve.\n\n• In the prisoner's dilemma, two players each choose to cooperate or defect.\n• If both cooperate, both receive a moderate reward.\n• If one defects while the other cooperates, the defector receives a large reward and the cooperator receives nothing.\n• If both defect, both receive a small punishment.\n• The rational choice for each individual is to defect, even though mutual cooperation would make both better off.`,
    question: "Which choice most effectively uses information from the notes to accomplish the student's goal?",
    choices: [
      "A) The prisoner's dilemma is a classic problem in game theory involving two players who must choose between cooperation and defection.",
      "B) In the prisoner's dilemma, mutual cooperation is unstable because each player individually benefits from defecting regardless of the other's choice, making the collectively optimal outcome irrational from each person's perspective.",
      "C) Game theory studies strategic interactions between rational decision-makers in many contexts.",
      "D) If both players defect, they both receive a small punishment, which is worse than if they both cooperated."
    ],
    correctAnswer: 1,
    explanation: "The student wants to explain why cooperation is difficult. B identifies the core mechanism: individual incentives to defect undermine collective cooperation, making the optimal outcome 'irrational from each person's perspective' (B)."
  },
  {
    id: 162,
    category: "Craft and Structure",
    difficulty: "Hard",
    passage: `When the tech company's CEO was asked during a congressional hearing why the platform had failed to remove violent content that violated its own policies, he responded: \"We are deeply committed to safety and have invested billions of dollars in content moderation.\" When pressed with specific examples of content that had remained online for months, he said: \"I'll have my team look into that and get back to you.\" He did not get back to them.`,
    question: "The final sentence ('He did not get back to them') functions primarily to:",
    choices: [
      "A) suggest the CEO was too busy to follow up.",
      "B) provide a neutral factual update about the hearing's aftermath.",
      "C) undermine the credibility of the CEO's stated commitments by showing a pattern of empty promises.",
      "D) express sympathy for the difficulty of content moderation."
    ],
    correctAnswer: 2,
    explanation: "The CEO promised to 'get back.' The flat statement 'He did not' reveals the promise was empty, undercutting his earlier claim of being 'deeply committed.' The sentence exposes a pattern of rhetoric without follow-through (C)."
  },
  {
    id: 163,
    category: "Standard English Conventions",
    difficulty: "Easy",
    passage: `The hiker packed _______ essential supplies: a first-aid kit, a water filter, a map, and enough food for three days on the trail.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) they're",
      "B) there",
      "C) their",
      "D) its"
    ],
    correctAnswer: 2,
    explanation: "'Their' (C) is the possessive pronoun referring to 'the hiker.' 'They're' means 'they are,' 'there' is a location word, and 'its' is used for non-human singular nouns."
  },
  {
    id: 164,
    category: "Transitions",
    difficulty: "Hard",
    passage: `The theory of island biogeography, developed by ecologists Robert MacArthur and E.O. Wilson, predicts that larger islands closer to the mainland should support more species than smaller, more isolated ones. Field observations across hundreds of islands have largely confirmed this pattern. _______ the theory also applies to habitat \"islands\" on land — isolated patches of forest surrounded by farmland, for example — making it relevant to conservation planning far beyond actual islands.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) By contrast,",
      "B) As a counterexample,",
      "C) Importantly,",
      "D) On the other hand,"
    ],
    correctAnswer: 2,
    explanation: "'Importantly' (C) signals that the following information — the theory's application beyond islands to land habitats — adds significant practical value. It's an extension of the theory's importance, not a contrast or counterexample."
  },
  {
    id: 165,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `A 2023 randomized trial tested whether financial incentives improve student performance. One group received $50 for each A grade earned; a control group received no payment. In the first semester, the incentivized group earned 12% more A grades. But when the payments stopped in the second semester, the incentivized group's performance dropped below the control group's — earning 8% fewer A grades than students who had never been paid. The researchers attributed this to the \"overjustification effect,\" where external rewards undermine intrinsic motivation.`,
    question: "The study's second-semester results are most significant because they suggest that:",
    choices: [
      "A) students in the control group were inherently more talented.",
      "B) the first-semester improvements were due to measurement error.",
      "C) financial incentives should be increased to maintain their effect.",
      "D) external rewards can actually damage long-term motivation by replacing internal drive with dependency on payment."
    ],
    correctAnswer: 3,
    explanation: "After payments stopped, the paid group performed WORSE than the never-paid group — the reward didn't just stop helping, it actively damaged motivation. This demonstrates that external rewards can undermine intrinsic motivation (D)."
  },
  {
    id: 166,
    category: "Standard English Conventions",
    difficulty: "Medium",
    passage: `The documentary, which took five years to _______ features interviews with over 200 survivors and includes previously classified footage obtained through Freedom of Information requests.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) produce",
      "B) produce.",
      "C) produce;",
      "D) produce,"
    ],
    correctAnswer: 3,
    explanation: "'Which took five years to produce' is a nonrestrictive clause that must close with a comma. The opening comma appears after 'documentary,' so the closing comma goes after 'produce' (D)."
  },
  {
    id: 167,
    category: "Craft and Structure",
    difficulty: "Medium",
    passage: `Ecologist Suzanne Simard discovered that trees in a forest communicate and share nutrients through an underground network of fungal threads — a system she calls the \"wood wide web.\" Older \"mother trees\" use this network to send carbon, nitrogen, and water to younger seedlings, particularly those growing in shade. When a mother tree is dying, it increases its nutrient transfers, as if passing on its resources to the next generation.`,
    question: "Simard's use of the terms 'mother trees' and the metaphor of 'passing on resources' most likely serves to:",
    choices: [
      "A) undermine the scientific credibility of her research.",
      "B) suggest that trees have human-like emotions and intentions.",
      "C) make a complex biological process accessible by drawing parallels to familiar caregiving behavior.",
      "D) argue that logging should be banned in all forests."
    ],
    correctAnswer: 2,
    explanation: "The family metaphors ('mother trees,' 'passing on resources') translate complex mycorrhizal biology into relatable human concepts of caregiving. This makes the science accessible without literally claiming trees have emotions (C)."
  },
  {
    id: 168,
    category: "Expression of Ideas",
    difficulty: "Easy",
    passage: `A student is writing about sleep for a health class. The student wants to counter the common belief that sleep is unproductive time.\n\n• During sleep, the brain consolidates memories from the day.\n• The glymphatic system clears toxic waste products from the brain during sleep.\n• Growth hormone is primarily released during deep sleep.\n• Sleep deprivation impairs immune function, emotional regulation, and cognitive performance.`,
    question: "Which choice most effectively uses information from the notes to accomplish the student's goal?",
    choices: [
      "A) Sleep deprivation has many negative health consequences, including impaired immune function.",
      "B) People should try to get 7-8 hours of sleep each night for optimal health.",
      "C) Far from being idle, the sleeping brain is intensely active: consolidating memories, clearing toxic waste through the glymphatic system, and releasing growth hormone — essential processes that cannot occur during waking hours.",
      "D) The glymphatic system is a recently discovered brain-cleaning mechanism that operates during sleep."
    ],
    correctAnswer: 2,
    explanation: "The student wants to counter the idea that sleep is unproductive. B directly addresses this by saying 'far from being idle' and listing three active processes the brain performs during sleep (C)."
  },
  {
    id: 169,
    category: "Information and Ideas",
    difficulty: "Easy",
    passage: `The Voyager 1 spacecraft, launched in 1977, is currently the most distant human-made object from Earth, traveling at approximately 17 kilometers per second. Despite being over 24 billion kilometers from Earth, it continues to transmit data to NASA, though signals take over 22 hours to reach us. Its plutonium power source is expected to sustain its instruments until approximately 2025.`,
    question: "Based on the passage, the primary challenge to continued communication with Voyager 1 is:",
    choices: [
      "A) the speed at which it is traveling.",
      "B) the declining power supply that will eventually prevent it from transmitting.",
      "C) interference from other spacecraft.",
      "D) its proximity to other stars."
    ],
    correctAnswer: 1,
    explanation: "The passage notes the plutonium power source will sustain instruments 'until approximately 2025' — implying power depletion is the limiting factor for communication (B). Speed and signal delay are facts but not the primary challenge."
  },
  {
    id: 170,
    category: "Standard English Conventions",
    difficulty: "Hard",
    passage: `The phenomenon known as \"code-switching\" — in which speakers alternate between two or more languages or dialects within a single conversation — _______ been the subject of extensive sociolinguistic research since the 1970s.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) have",
      "B) has",
      "C) having",
      "D) are"
    ],
    correctAnswer: 1,
    explanation: "The subject is 'The phenomenon' (singular). The long parenthetical between dashes describes code-switching but doesn't change the singular subject. 'Has' (B) is the correct singular form."
  },
  {
    id: 171,
    category: "Transitions",
    difficulty: "Medium",
    passage: `Ancient Roman concrete structures like the Pantheon have survived for over 2,000 years, while modern concrete typically begins to deteriorate within 50 years. _______ researchers recently discovered that Roman concrete contained lime clasts — small chunks of calcium — that gave the material a remarkable self-healing property: when cracks formed, water seeping in would react with the lime to fill the gaps.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) Despite this difference,",
      "B) Similarly,",
      "C) Confirming modern superiority,",
      "D) Investigating this disparity,"
    ],
    correctAnswer: 3,
    explanation: "'Investigating this disparity' (D) signals that researchers looked into why the durability gap exists and found the answer (lime clasts). It logically connects the observation (gap) to the explanation (research findings)."
  },
  {
    id: 172,
    category: "Craft and Structure",
    difficulty: "Easy",
    passage: `The job listing asked for \"a self-starter with a passion for disruption\" who would \"wear many hats\" and \"thrive in ambiguity.\" Translated from corporate jargon, the company wanted one person to do three people's jobs with no clear direction.`,
    question: "The second sentence primarily functions as:",
    choices: [
      "A) an endorsement of the company's hiring practices.",
      "B) a blunt reinterpretation that reveals the practical reality behind the euphemistic language.",
      "C) a suggestion that job seekers should avoid this type of position.",
      "D) a technical explanation of modern hiring terminology."
    ],
    correctAnswer: 1,
    explanation: "The second sentence strips away the euphemisms ('self-starter,' 'wear many hats,' 'thrive in ambiguity') and restates them bluntly (one person, three jobs, no direction). It reveals reality behind the language (B)."
  },
  {
    id: 173,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `Cognitive scientist George Lakoff argues that political debates are won not through facts and logic but through framing — the metaphorical structures through which issues are understood. When one side defines \"taxes\" as \"burdens,\" the debate is already half lost for anyone who wants to reframe them as \"investments.\" Lakoff notes that once a frame is established, presenting facts that contradict it actually strengthens the frame, because people must first activate the frame to understand the counter-argument.`,
    question: "According to Lakoff, presenting facts that contradict an established frame is counterproductive because:",
    choices: [
      "A) facts are inherently less persuasive than emotions.",
      "B) the act of engaging with the frame reinforces it in the audience's mind, even when the intent is to challenge it.",
      "C) people are incapable of processing factual information.",
      "D) political debates should avoid using facts entirely."
    ],
    correctAnswer: 1,
    explanation: "Lakoff says people 'must first activate the frame to understand the counter-argument,' meaning engaging with the frame reinforces it even when trying to disprove it (C). A and D are not his argument."
  },
  {
    id: 174,
    category: "Expression of Ideas",
    difficulty: "Hard",
    passage: `Text 1: Education researcher John Hattie analyzed over 800 meta-analyses covering 50,000 studies to identify which teaching strategies have the largest effect on student learning. He found that direct instruction — explicit teaching with modeling and guided practice — had an effect size of 0.59, well above the average of 0.40. Student-directed inquiry learning had an effect size of only 0.31.\n\nText 2: Education researcher Alfie Kohn argues that Hattie's framework privileges easily measurable outcomes like test scores while ignoring harder-to-measure qualities like curiosity, creativity, and intrinsic love of learning. Kohn contends that inquiry-based learning develops these deeper qualities even if it produces smaller gains on standardized assessments.`,
    question: "The fundamental tension between Hattie and Kohn concerns:",
    choices: [
      "A) what counts as meaningful evidence of student learning.",
      "B) whether teachers should be trained differently.",
      "C) whether education research should use meta-analyses.",
      "D) whether standardized tests are technically reliable."
    ],
    correctAnswer: 0,
    explanation: "Hattie uses effect sizes on measurable outcomes; Kohn argues this ignores deeper qualities. Their disagreement is fundamentally about what constitutes meaningful evidence of learning (A) — test scores vs. curiosity/creativity."
  },
  {
    id: 175,
    category: "Standard English Conventions",
    difficulty: "Easy",
    passage: `The park ranger explained that visitors _______ stay on marked trails to protect the fragile alpine vegetation, which can take decades to recover from a single footprint.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) might",
      "B) must",
      "C) could",
      "D) will"
    ],
    correctAnswer: 1,
    explanation: "The context — protecting fragile vegetation that takes decades to recover — indicates a requirement, not a suggestion. 'Must' (B) conveys obligation. 'Might' and 'could' are too weak, 'will' is a prediction rather than a rule."
  },

  // ========== BATCH 176-200 ==========

  {
    id: 176,
    category: "Craft and Structure",
    difficulty: "Medium",
    passage: `The word \"nice\" originally meant \"ignorant\" or \"foolish\" in the 13th century. By the 14th century it had shifted to mean \"fastidious\" or \"precise.\" By the 18th century it had softened to its current meaning of \"pleasant\" or \"agreeable.\" This trajectory — from insult to near-meaningless compliment — is typical of a process linguists call semantic bleaching, in which a word loses its specific force through overuse.`,
    question: "The passage uses the history of the word 'nice' primarily to:",
    choices: [
      "A) argue that people should stop using the word 'nice.'",
      "B) provide a concrete illustration of the linguistic concept of semantic bleaching.",
      "C) demonstrate that English vocabulary has shrunk over the centuries.",
      "D) compare medieval and modern communication styles."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"semantic bleaching","definition":"the process by which a word gradually loses its original specific meaning through overuse"}],
    explanation: "The word's history from 'foolish' to 'pleasant' is presented as a 'typical' example of semantic bleaching. It illustrates the concept with a specific, familiar case (B)."
  },
  {
    id: 177,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `Political scientist Francis Fukuyama famously declared in 1989 that the end of the Cold War represented \"the end of history\" — the triumph of liberal democracy as the final form of human government. Three decades later, democratic backsliding has accelerated worldwide: Freedom House reports that more countries have experienced democratic decline than improvement for 18 consecutive years. Fukuyama has since revised his position, acknowledging that identity politics and institutional decay pose threats he had not anticipated, though he maintains that no coherent ideological alternative to liberal democracy has emerged.`,
    question: "Fukuyama's revised position differs from his original claim in that he now:",
    choices: [
      "A) completely rejects liberal democracy as a viable system.",
      "B) acknowledges threats to democratic stability while maintaining that no alternative ideology has replaced it.",
      "C) argues that authoritarian governments are more effective than democracies.",
      "D) no longer believes the Cold War ended."
    ],
    correctAnswer: 1,
    explanation: "Fukuyama revised to acknowledge 'identity politics and institutional decay' as threats he didn't anticipate but 'maintains that no coherent ideological alternative has emerged.' He modified his optimism, not his core thesis (B)."
  },
  {
    id: 178,
    category: "Transitions",
    difficulty: "Easy",
    passage: `Cheetahs are the fastest land animals, capable of reaching speeds up to 112 kilometers per hour. _______ they can maintain this speed for only about 30 seconds before overheating, which means their hunts must succeed quickly or fail entirely.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) Therefore,",
      "B) Similarly,",
      "C) However,",
      "D) For instance,"
    ],
    correctAnswer: 2,
    explanation: "'However' (C) introduces a limitation that contrasts with the impressive speed. Being fast sounds like a pure advantage, but the 30-second limit is a significant constraint."
  },
  {
    id: 179,
    category: "Standard English Conventions",
    difficulty: "Medium",
    passage: `The research team's latest paper, which presents findings from a five-year longitudinal study of coral reef degradation in the Pacific, _______ been submitted to three peer-reviewed journals simultaneously.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) have",
      "B) having",
      "C) has",
      "D) are"
    ],
    correctAnswer: 2,
    explanation: "The subject is 'paper' (singular). The nonrestrictive clause between commas doesn't change the subject. 'Has' (C) is the correct singular verb form."
  },
  {
    id: 180,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `A student is writing about invasive species for an environmental science class. The student wants to illustrate an unintended consequence of a well-intentioned introduction.\n\n• Cane toads were introduced to Australia in 1935 to control cane beetles damaging sugar crops.\n• The toads failed to control the beetles because they could not reach beetles at the top of the sugar cane.\n• The toads multiplied rapidly, reaching a population of over 200 million.\n• Cane toads are highly toxic, and native predators that attempt to eat them die.`,
    question: "Which choice most effectively uses information from the notes to accomplish the student's goal?",
    choices: [
      "A) Cane toads are a significant environmental problem in Australia, with a population exceeding 200 million.",
      "B) Native Australian predators are threatened by the toxic cane toad, which was brought to Australia in 1935.",
      "C) When Australia introduced cane toads in 1935 to protect its sugar crops, the plan backfired spectacularly: the toads couldn't reach the beetles they were meant to control, then multiplied to 200 million, poisoning native predators that tried to eat them.",
      "D) Invasive species are organisms introduced to environments where they did not naturally evolve."
    ],
    correctAnswer: 2,
    explanation: "The student wants to show an unintended consequence of a good intention. B tells the full story: good intention (control beetles), failure (couldn't reach them), and cascading consequences (population explosion, poisoning predators) (C)."
  },
  {
    id: 181,
    category: "Craft and Structure",
    difficulty: "Hard",
    passage: `The city's official tourism website described the neighborhood as \"vibrant\" and \"up-and-coming,\" with \"authentic local character.\" Residents of the neighborhood, who had watched their rents triple in five years and their neighbors displaced one by one, had a different word for it: gentrification. The tourists came for the \"character.\" The character left because it could no longer afford to stay.`,
    question: "The final two sentences employ a rhetorical technique that:",
    choices: [
      "A) uses statistical evidence to support a claim about housing costs.",
      "B) directly addresses the reader to call them to action.",
      "C) repeats the word 'character' to reveal the contradiction between tourism marketing and displacement.",
      "D) compares the neighborhood favorably to other tourist destinations."
    ],
    correctAnswer: 2,
    explanation: "The word 'character' shifts meaning: tourists came for cultural charm, but the actual people (the 'character') were displaced. This repetition exposes the contradiction between marketing and reality (C)."
  },
  {
    id: 182,
    category: "Information and Ideas",
    difficulty: "Easy",
    passage: `The axolotl, a salamander native to Mexico City's lake system, possesses an extraordinary ability: it can regenerate entire limbs, portions of its heart, and even parts of its brain. Unlike most amphibians, axolotls retain their larval features throughout adulthood, a condition called neoteny. Scientists study axolotls hoping to understand the genetic mechanisms behind regeneration, with potential applications for human medicine.`,
    question: "According to the passage, scientists are interested in axolotls primarily because of their:",
    choices: [
      "A) ability to regenerate body parts, which could inform human medical research.",
      "B) endangered status in Mexican lake systems.",
      "C) attractive appearance and popularity as pets.",
      "D) unique habitat requirements in urban environments."
    ],
    correctAnswer: 0,
    vocabWords: [{"word":"neoteny","definition":"the retention of juvenile features in the adult animal"},{"word":"regenerate","definition":"to regrow or restore lost or damaged tissue"}],
    explanation: "The passage states scientists study axolotls 'hoping to understand the genetic mechanisms behind regeneration, with potential applications for human medicine' (A)."
  },
  {
    id: 183,
    category: "Transitions",
    difficulty: "Medium",
    passage: `The traditional model of scientific progress, proposed by Thomas Kuhn, describes long periods of \"normal science\" interrupted by dramatic \"paradigm shifts\" — sudden revolutions that overturn established frameworks. _______ historian of science David Wootton argues that progress more often occurs through gradual accumulation of anomalies that slowly erode confidence in the dominant theory until a tipping point is reached.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) Confirming this model,",
      "B) For example,",
      "C) As a consequence,",
      "D) Challenging this narrative,"
    ],
    correctAnswer: 3,
    explanation: "Wootton proposes gradual accumulation vs. Kuhn's sudden revolutions — this is a direct challenge to Kuhn's model. 'Challenging this narrative' (D) signals this disagreement."
  },
  {
    id: 184,
    category: "Standard English Conventions",
    difficulty: "Easy",
    passage: `The twins, who were separated at birth and raised in different _______ discovered upon reuniting at age 35 that they had both become firefighters, married women named Linda, and named their dogs Rex.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) countries,",
      "B) countries",
      "C) countries;",
      "D) countries."
    ],
    correctAnswer: 0,
    explanation: "'Who were separated at birth and raised in different countries' is a nonrestrictive clause. It opened with a comma after 'twins,' so it must close with a comma: 'countries,' (A)."
  },
  {
    id: 185,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `A study of chess expertise found that grandmasters do not see more moves ahead than intermediate players — both typically calculate 3-4 moves deep. The key difference is pattern recognition: grandmasters can instantly recognize approximately 50,000 board configurations and their associated best responses, allowing them to focus calculation only on the most promising lines. This finding parallels research in medicine showing that expert diagnosticians reach correct diagnoses faster not by considering more possibilities but by recognizing familiar symptom patterns.`,
    question: "The passage draws a parallel between chess and medicine primarily to suggest that:",
    choices: [
      "A) chess players would make good doctors.",
      "B) expertise across domains relies more on pattern recognition than on exhaustive analysis.",
      "C) intermediate chess players and novice doctors make identical mistakes.",
      "D) computational speed is the only factor distinguishing experts from novices."
    ],
    correctAnswer: 1,
    explanation: "Both chess grandmasters and expert diagnosticians excel through pattern recognition, not deeper calculation or more analysis. The parallel illustrates that this mechanism operates across domains (B)."
  },
  {
    id: 186,
    category: "Expression of Ideas",
    difficulty: "Hard",
    passage: `Text 1: Urban planner Jan Gehl argues that cities should be designed \"at eye level\" — prioritizing the experience of pedestrians over the efficiency of cars. He cites Copenhagen's transformation of its car-clogged Strøget street into a pedestrian zone in 1962 as proof that when you design for people, economic vitality follows: the street became the most commercially successful area in the city.\n\nText 2: Transportation engineer Charles Marohn contends that walkable streets often create a \"paradox of value\" — they generate more economic activity per acre than car-dependent developments but cost far less in infrastructure to maintain. Despite this, cities continue to subsidize suburban sprawl because property tax structures reward geographic expansion over productive density.`,
    question: "Marohn's analysis most directly adds to Gehl's argument by:",
    choices: [
      "A) contradicting Gehl's claim that pedestrian streets improve economic vitality.",
      "B) providing a fiscal explanation for why cities resist the pedestrian-first approach despite its demonstrated benefits.",
      "C) arguing that Copenhagen's experience cannot be replicated elsewhere.",
      "D) suggesting that car-dependent development is more environmentally sustainable."
    ],
    correctAnswer: 1,
    explanation: "Gehl shows pedestrian design works. Marohn explains why cities don't do it — tax structures incentivize sprawl over density. He adds a fiscal/structural explanation for the resistance to Gehl's approach (B)."
  },
  {
    id: 187,
    category: "Craft and Structure",
    difficulty: "Medium",
    passage: `Historian Howard Zinn opened his influential textbook with a chapter on Christopher Columbus that focused not on discovery and exploration but on slavery, mutilation, and the decimation of the Taíno people. When critics accused him of bias, Zinn responded that traditional history textbooks were equally biased — they simply biased toward the perspective of the powerful, and that bias had become so normalized it was invisible.`,
    question: "Zinn's response to his critics is best characterized as arguing that:",
    choices: [
      "A) his critics' charge of bias applies to all historical narratives, including the ones his critics treat as objective.",
      "B) all historical accounts are equally unreliable.",
      "C) the Taíno perspective is the only valid one.",
      "D) textbooks should contain no point of view at all."
    ],
    correctAnswer: 0,
    explanation: "Zinn doesn't deny bias — he argues traditional textbooks are also biased (toward the powerful) but their bias is 'invisible' because it's normalized. He turns the charge of bias back on his critics (B). B is too extreme, C is not his claim."
  },
  {
    id: 188,
    category: "Standard English Conventions",
    difficulty: "Hard",
    passage: `Among the many challenges facing the restoration team _______ the deteriorating condition of the building's foundation, which had been weakened by decades of water infiltration and seismic activity.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) are",
      "B) were",
      "C) was",
      "D) have been"
    ],
    correctAnswer: 2,
    explanation: "This is an inverted sentence. The subject is 'the deteriorating condition' (singular), not 'challenges.' The sentence structure is 'Among X was Y.' 'Was' (C) agrees with the singular subject."
  },
  {
    id: 189,
    category: "Transitions",
    difficulty: "Hard",
    passage: `Economist Thomas Piketty's analysis of two centuries of wealth data revealed that the rate of return on capital consistently exceeds the rate of economic growth — a finding he expressed as r > g. When capital returns outpace growth, wealth concentrates among those who already own assets, while wages stagnate for everyone else. _______ Piketty proposed a global wealth tax as a corrective, though he acknowledged that international coordination on such a policy is, at present, politically implausible.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) To address this dynamic,",
      "B) Dismissing this finding,",
      "C) Contradicting his own data,",
      "D) Despite strong evidence,"
    ],
    correctAnswer: 0,
    explanation: "'To address this dynamic' (A) signals that Piketty's policy proposal (wealth tax) is his response to the problem he identified (r > g). It connects the diagnosis to the prescription."
  },
  {
    id: 190,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `Neuroscientists using functional MRI discovered that when subjects were told a wine cost $90 rather than its actual price of $5, activity in the medial orbitofrontal cortex — a region associated with experienced pleasure — increased significantly. Crucially, other brain regions that process basic taste information showed no difference between the two conditions. This suggests that the price didn't change what subjects tasted but changed how much pleasure they derived from the experience, a distinction with profound implications for how we understand the relationship between expectation and reality.`,
    question: "The finding that basic taste-processing regions showed no difference between conditions is important because it:",
    choices: [
      "A) proves that expensive wines taste the same as cheap wines to everyone.",
      "B) demonstrates that fMRI technology cannot accurately measure taste perception.",
      "C) suggests that price expectations change the pleasure response without altering the sensory perception of taste itself.",
      "D) indicates that the subjects were lying about their experience."
    ],
    correctAnswer: 2,
    explanation: "If taste regions showed no difference but pleasure regions did, the price changed enjoyment without changing taste perception. This separates expectation-driven pleasure from sensory experience (C)."
  },
  {
    id: 191,
    category: "Craft and Structure",
    difficulty: "Easy",
    passage: `The instructions on the shampoo bottle read: \"Apply to wet hair, lather, rinse, repeat.\" An economist once observed that this last word — \"repeat\" — is perhaps the most profitable single word in the English language, as it doubles the consumption of the product without providing any additional benefit to the consumer.`,
    question: "The economist's observation highlights:",
    choices: [
      "A) the superior cleaning power of double-shampooing.",
      "B) the complexity of modern hair care routines.",
      "C) how a single word in product instructions can manipulate consumer behavior to increase sales.",
      "D) the dishonesty of all product manufacturers."
    ],
    correctAnswer: 2,
    explanation: "'Repeat' doubles consumption 'without providing any additional benefit.' The economist points out how this single word manipulates behavior to increase sales (B). D is too extreme."
  },
  {
    id: 192,
    category: "Standard English Conventions",
    difficulty: "Medium",
    passage: `The committee voted to approve the budget, _______ several members expressed reservations about the allocation for infrastructure repairs, which they considered insufficient given the aging condition of the city's bridges and roads.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) despite",
      "B) although",
      "C) because",
      "D) therefore"
    ],
    correctAnswer: 1,
    explanation: "'Although' (B) correctly introduces a concessive clause — the budget was approved despite reservations. 'Despite' requires a noun/gerund, not a clause. 'Because' and 'therefore' imply the reservations caused the approval."
  },
  {
    id: 193,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `A student is writing about the ethics of zoos for a philosophy class. The student wants to present both sides of the debate fairly.\n\n• Zoos protect endangered species through breeding programs.\n• Many zoo animals exhibit stereotypic behaviors (repetitive, purposeless movements) associated with psychological distress.\n• The Association of Zoos and Aquariums accredits only about 10% of animal exhibitors in the US.\n• Some species, such as elephants and orcas, suffer significant health problems in captivity.`,
    question: "Which choice most effectively uses information from the notes to accomplish the student's goal?",
    choices: [
      "A) While zoos can play a valuable role in conservation through breeding programs, critics point to the psychological distress evident in stereotypic behaviors and the health problems certain species experience in captivity, suggesting the ethical calculus is not straightforward.",
      "B) All zoos provide excellent care for their animals and play a vital role in species conservation.",
      "C) Zoos are cruel institutions that should be abolished because animals exhibit stereotypic behaviors in captivity.",
      "D) The Association of Zoos and Aquariums accredits approximately 10% of animal exhibitors in the United States."
    ],
    correctAnswer: 0,
    explanation: "The student wants both sides presented fairly. C acknowledges the conservation benefit while also noting the ethical concerns (stereotypic behaviors, health problems) without declaring one side the winner (C). A and B are one-sided."
  },
  {
    id: 194,
    category: "Craft and Structure",
    difficulty: "Hard",
    passage: `When the tech billionaire pledged $100 million to \"solve homelessness\" in his city, he hired management consultants, launched an app, and established a \"data-driven\" task force. Five years and $100 million later, homelessness in the city had increased by 12%. The billionaire published an op-ed describing the initiative as \"a valuable learning experience.\" Advocates who had worked with homeless populations for decades noted that the amount spent on consultants alone would have funded 2,000 permanent housing units.`,
    question: "The advocates' observation about housing units serves to:",
    choices: [
      "A) praise the billionaire's generosity and vision.",
      "B) suggest that consultants are more effective than housing at reducing homelessness.",
      "C) argue that $100 million is insufficient to affect homelessness.",
      "D) highlight how the money could have directly addressed the problem rather than being spent on process."
    ],
    correctAnswer: 3,
    explanation: "The advocates contrast consultant spending (process) with housing units (direct solution). This highlights that the money went to overhead rather than the actual solution (D)."
  },
  {
    id: 195,
    category: "Information and Ideas",
    difficulty: "Easy",
    passage: `The tardigrade, also known as a \"water bear,\" is a microscopic animal that can survive conditions lethal to virtually all other life. Tardigrades have been shown to withstand temperatures from minus 272 degrees Celsius to 150 degrees Celsius, pressures six times greater than the deepest ocean trench, radiation levels hundreds of times the lethal dose for humans, and the vacuum of outer space. They achieve this by entering a state called cryptobiosis, in which they expel nearly all water from their bodies and suspend their metabolism.`,
    question: "The passage explains tardigrades' extreme resilience as resulting from:",
    choices: [
      "A) cryptobiosis, a state in which they lose almost all water and stop metabolic activity.",
      "B) a thick protective shell that insulates them from external conditions.",
      "C) their ability to reproduce quickly in hostile environments.",
      "D) their large body size relative to other microscopic animals."
    ],
    correctAnswer: 0,
    explanation: "The passage states they 'achieve this by entering a state called cryptobiosis, in which they expel nearly all water from their bodies and suspend their metabolism' (A). No shell, size, or reproduction is mentioned."
  },
  {
    id: 196,
    category: "Transitions",
    difficulty: "Easy",
    passage: `Humans can distinguish roughly one million colors. The mantis shrimp, by contrast, has sixteen types of color receptors compared to our three. _______ research suggests that mantis shrimp do not actually see more colors than humans — they process color information differently, using a simpler but faster recognition system.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) Predictably,",
      "B) Surprisingly,",
      "C) As a result,",
      "D) To confirm this,"
    ],
    correctAnswer: 1,
    explanation: "Having 16 receptors would logically suggest seeing more colors. The finding that they don't is unexpected — 'Surprisingly' (B) signals this counterintuitive result."
  },
  {
    id: 197,
    category: "Standard English Conventions",
    difficulty: "Hard",
    passage: `The discovery of high levels of lead in the municipal water supply — a contamination that had persisted undetected for over a decade — _______ the community and led to the resignation of three senior city officials.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) have outraged",
      "B) outraging",
      "C) outraged",
      "D) are outraging"
    ],
    correctAnswer: 2,
    explanation: "The subject is 'The discovery' (singular). The sentence describes a completed past event (officials resigned). 'Outraged' (C) is the correct singular past tense form. The dash-enclosed clause is parenthetical."
  },
  {
    id: 198,
    category: "Craft and Structure",
    difficulty: "Medium",
    passage: `Psychologist Philip Zimbardo's famous 1971 Stanford Prison Experiment — in which college students assigned to play \"guards\" quickly became abusive toward students assigned to play \"prisoners\" — has been cited thousands of times as evidence that situational forces can override individual morality. However, recently uncovered audio recordings reveal that Zimbardo actively coached the \"guards\" to be cruel, and several participants have said they were acting rather than genuinely transformed. The experiment's conclusions may say less about human nature than about the power of authority figures to elicit compliance.`,
    question: "The passage suggests that the Stanford Prison Experiment's famous conclusion should be reinterpreted as evidence of:",
    choices: [
      "A) the inherent cruelty of college students.",
      "B) the reliability of psychological experiments conducted in the 1970s.",
      "C) obedience to authority rather than the power of situational roles.",
      "D) the ethical superiority of modern research methods."
    ],
    correctAnswer: 2,
    explanation: "The new evidence shows Zimbardo coached cruelty and participants were acting. The passage concludes the experiment shows 'the power of authority figures to elicit compliance' — obedience to authority, not situational transformation (C)."
  },
  {
    id: 199,
    category: "Expression of Ideas",
    difficulty: "Easy",
    passage: `A student is writing about the water cycle for an earth science class. The student wants to explain why the water cycle is essential to life on Earth.\n\n• The water cycle moves water between oceans, atmosphere, and land.\n• Evaporation from oceans produces clouds that deliver freshwater as precipitation.\n• Without the water cycle, freshwater would not be distributed across continents.\n• All terrestrial ecosystems depend on precipitation for their water supply.`,
    question: "Which choice most effectively uses information from the notes to accomplish the student's goal?",
    choices: [
      "A) Without the water cycle's continuous redistribution of water from oceans to land via evaporation and precipitation, freshwater would never reach continental ecosystems, making terrestrial life impossible.",
      "B) Oceans contain about 97% of Earth's water.",
      "C) The water cycle involves evaporation, condensation, and precipitation.",
      "D) The water cycle is a process studied in earth science courses around the world."
    ],
    correctAnswer: 0,
    explanation: "The student wants to explain why it's essential to life. C connects the mechanism (ocean evaporation → precipitation on land) to the consequence (without it, no freshwater for terrestrial life) (A)."
  },
  {
    id: 200,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `A longitudinal study tracked 10,000 adults over 20 years to determine whether pet ownership affects cardiovascular health. Dog owners had a 24% lower risk of death from heart disease compared to non-pet-owners, and this association persisted after controlling for exercise habits, diet, smoking, and socioeconomic status. However, cat owners showed no significant cardiovascular benefit. The researchers hypothesized that the social interaction and routine physical activity associated with dog walking — not pet ownership itself — drives the health benefit.`,
    question: "The finding about cat owners is important to the study's interpretation because it:",
    choices: [
      "A) proves that cats are unhealthy animals to keep as pets.",
      "B) demonstrates that the study's methodology was flawed.",
      "C) suggests the benefit comes from dog-specific activities like walking rather than the emotional comfort of pet ownership generally.",
      "D) confirms that all types of pet ownership improve health."
    ],
    correctAnswer: 2,
    explanation: "If pet ownership itself were the cause, cat owners should benefit too. The absence of a cat-owner benefit supports the hypothesis that dog-specific activities (walking, social interaction) drive the effect (B). D is contradicted by the data."
  },
]

export default questions
