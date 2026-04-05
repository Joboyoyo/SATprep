const questions = [
  {
    id: 1,
    category: "Craft and Structure",
    difficulty: "Easy",
    passage: `The following is adapted from a study on urban ecology. Cities, often perceived as concrete jungles devoid of nature, are in fact teeming with biodiversity. Recent studies have shown that urban areas can support a surprising variety of species, from peregrine falcons nesting on skyscrapers to coyotes navigating suburban neighborhoods. However, this urban wildlife faces unique challenges, including habitat fragmentation, pollution, and the constant encroachment of human development. Researchers argue that understanding urban ecosystems is crucial not only for conservation but also for improving the quality of life for city dwellers themselves.`,
    question: "Which choice best describes the main idea of the passage?",
    choices: [
      "A) Cities are inhospitable environments that drive away most wildlife species.",
      "B) Urban areas harbor unexpected biodiversity despite significant environmental challenges.",
      "C) Peregrine falcons and coyotes are the most common animals found in cities.",
      "D) Conservation efforts in cities are more important than those in rural areas."
    ],
    correctAnswer: 1,
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
      "A) retreat",
      "B) gradual intrusion",
      "C) sudden destruction",
      "D) careful planning"
    ],
    correctAnswer: 1,
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
      "B) illustrate how the accident contributed to scientific understanding of the brain.",
      "C) suggest that Gage was a difficult person before the accident.",
      "D) criticize the safety standards of 19th-century railroad construction."
    ],
    correctAnswer: 1,
    explanation: "The personality changes are presented as evidence that led to new understanding about the frontal lobes' role, supporting choice B."
  },
  {
    id: 4,
    category: "Information and Ideas",
    difficulty: "Easy",
    passage: `In 1848, a railroad construction foreman named Phineas Gage survived a remarkable accident: a large iron rod was driven completely through his skull, destroying much of his left frontal lobe. Although Gage survived and could walk and speak, his personality changed dramatically. Once reliable and well-liked, he became impulsive, irreverent, and unable to stick to plans. His case became one of the first to suggest that the frontal lobes play a critical role in personality and decision-making, fundamentally changing our understanding of brain function.`,
    question: "Based on the passage, which of the following was true about Gage BEFORE the accident?",
    choices: [
      "A) He was impulsive and irreverent.",
      "B) He had difficulty making decisions.",
      "C) He was considered dependable by others.",
      "D) He had a history of brain injuries."
    ],
    correctAnswer: 2,
    explanation: "The passage says he was 'once reliable and well-liked' before the accident, meaning he was considered dependable (C)."
  },
  {
    id: 5,
    category: "Craft and Structure",
    difficulty: "Medium",
    passage: `The debate over whether homework improves academic achievement has persisted for decades. Proponents argue that homework reinforces classroom learning and builds study habits. Critics, however, point to research showing that excessive homework can increase stress, reduce family time, and may not significantly boost performance, particularly for younger students. A 2006 meta-analysis by Harris Cooper found that homework had a positive effect on achievement for high school students but little to no impact for elementary school students. This nuanced finding suggests that a one-size-fits-all homework policy may be misguided.`,
    question: "Which choice best describes the structure of the passage?",
    choices: [
      "A) A claim is made, and then evidence is presented to refute it entirely.",
      "B) Two opposing viewpoints are presented, followed by research that partially supports each.",
      "C) A historical overview leads to a definitive conclusion about homework policy.",
      "D) An anecdote introduces a broader discussion of educational theory."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"meta-analysis","definition":"a statistical method that combines results from multiple studies"},{"word":"proponents","definition":"people who advocate for or support something"}],
    explanation: "The passage presents pro-homework and anti-homework views, then cites Cooper's research which supports homework for older but not younger students — partially supporting each side (B)."
  },
  {
    id: 6,
    category: "Craft and Structure",
    difficulty: "Easy",
    passage: `The debate over whether homework improves academic achievement has persisted for decades. Proponents argue that homework reinforces classroom learning and builds study habits. Critics, however, point to research showing that excessive homework can increase stress, reduce family time, and may not significantly boost performance, particularly for younger students. A 2006 meta-analysis by Harris Cooper found that homework had a positive effect on achievement for high school students but little to no impact for elementary school students. This nuanced finding suggests that a one-size-fits-all homework policy may be misguided.`,
    question: "The word 'nuanced' in the final sentence most nearly means:",
    choices: [
      "A) biased",
      "B) subtle and complex",
      "C) controversial",
      "D) widely accepted"
    ],
    correctAnswer: 1,
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
      "B) skeptical, because the cost would be prohibitive.",
      "C) supportive, because it is a practical and cost-effective solution.",
      "D) neutral, presenting it as one of many equally viable options."
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"desalination","definition":"the process of removing salt from seawater to make it drinkable"},{"word":"infrastructure","definition":"the basic physical systems of a society (roads, bridges, pipes, etc.)"}],
    explanation: "The author says fixing leaks 'could dramatically improve water availability at a fraction of the cost,' clearly supporting this approach as practical (C)."
  },
  {
    id: 8,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `Water scarcity is projected to affect nearly two-thirds of the world's population by 2025. While technological solutions like desalination and wastewater recycling show promise, they remain expensive and energy-intensive. Some experts advocate for a simpler approach: reducing water waste. In many cities, aging infrastructure causes significant water loss through leaking pipes — in some systems, up to 30% of treated water never reaches consumers. Fixing these leaks, while less glamorous than high-tech solutions, could dramatically improve water availability at a fraction of the cost.`,
    question: "The passage implies that desalination is:",
    choices: [
      "A) the most effective solution to water scarcity.",
      "B) a promising but resource-demanding technology.",
      "C) already widely implemented in most cities.",
      "D) cheaper than fixing aging infrastructure."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"energy-intensive","definition":"requiring a large amount of energy to produce or operate"}],
    explanation: "The passage says desalination 'shows promise' but is 'expensive and energy-intensive,' making B the best inference."
  },
  {
    id: 9,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `For centuries, the library of Alexandria was considered the greatest repository of knowledge in the ancient world. Founded in the 3rd century BCE, it attracted scholars from across the Mediterranean and housed hundreds of thousands of scrolls. Its destruction — the precise cause and timing of which remain debated — has come to symbolize the tragic loss of knowledge. Some historians attribute the destruction to Julius Caesar's fire in 48 BCE, while others point to later events, including the decree of Emperor Theodosius in 391 CE. What is clear is that no single catastrophic event destroyed the library; rather, it declined gradually over centuries of political turmoil and neglect.`,
    question: "According to the passage, what is the most accurate statement about the library's destruction?",
    choices: [
      "A) Julius Caesar was solely responsible for burning the library.",
      "B) Emperor Theodosius ordered the library's complete destruction.",
      "C) The library's decline was a gradual process rather than a single event.",
      "D) Historians agree on when and how the library was destroyed."
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"repository","definition":"a place where things are stored in large quantities"},{"word":"catastrophic","definition":"involving or causing sudden great damage or suffering"}],
    explanation: "The final sentence explicitly states 'no single catastrophic event destroyed the library; rather, it declined gradually,' supporting C."
  },
  {
    id: 10,
    category: "Craft and Structure",
    difficulty: "Easy",
    passage: `For centuries, the library of Alexandria was considered the greatest repository of knowledge in the ancient world. Founded in the 3rd century BCE, it attracted scholars from across the Mediterranean and housed hundreds of thousands of scrolls. Its destruction — the precise cause and timing of which remain debated — has come to symbolize the tragic loss of knowledge. Some historians attribute the destruction to Julius Caesar's fire in 48 BCE, while others point to later events, including the decree of Emperor Theodosius in 391 CE. What is clear is that no single catastrophic event destroyed the library; rather, it declined gradually over centuries of political turmoil and neglect.`,
    question: "The phrase 'repository of knowledge' most nearly means:",
    choices: [
      "A) a school for training scholars",
      "B) a place where information is stored",
      "C) a government building",
      "D) a marketplace for selling books"
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"repository","definition":"a place where things are stored or deposited"}],
    explanation: "A 'repository' is a place where things are stored or deposited. In context, the library stored scrolls containing knowledge (B)."
  },
  {
    id: 11,
    category: "Craft and Structure",
    difficulty: "Medium",
    passage: `The concept of \"emotional intelligence\" — the ability to recognize, understand, and manage one's own emotions and those of others — was popularized by psychologist Daniel Goleman in his 1995 book. Goleman argued that emotional intelligence, or EQ, could be more important than traditional IQ in determining success in life and work. While some researchers have supported this claim, others have questioned the scientific rigor of EQ measurements and whether emotional intelligence is truly distinct from personality traits. Despite this debate, the concept has had an enormous influence on education and corporate training.`,
    question: "The primary purpose of the passage is to:",
    choices: [
      "A) prove that emotional intelligence is more important than IQ.",
      "B) provide an overview of emotional intelligence and the debate surrounding it.",
      "C) argue that emotional intelligence research lacks scientific validity.",
      "D) explain how emotional intelligence is measured."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"emotional intelligence","definition":"the ability to recognize, understand, and manage emotions"},{"word":"rigor","definition":"the quality of being extremely thorough and careful"}],
    explanation: "The passage introduces EQ, presents Goleman's claims, notes criticism, and mentions its influence — an overview with both sides of the debate (B)."
  },
  {
    id: 12,
    category: "Expression of Ideas",
    difficulty: "Hard",
    passage: `The concept of \"emotional intelligence\" — the ability to recognize, understand, and manage one's own emotions and those of others — was popularized by psychologist Daniel Goleman in his 1995 book. Goleman argued that emotional intelligence, or EQ, could be more important than traditional IQ in determining success in life and work. While some researchers have supported this claim, others have questioned the scientific rigor of EQ measurements and whether emotional intelligence is truly distinct from personality traits. Despite this debate, the concept has had an enormous influence on education and corporate training.`,
    question: "Which of the following, if true, would most weaken Goleman's argument?",
    choices: [
      "A) Many successful CEOs score high on emotional intelligence tests.",
      "B) Studies show that EQ scores are strongly correlated with existing personality assessments and do not predict outcomes beyond what IQ already predicts.",
      "C) Emotional intelligence training programs have become popular in schools.",
      "D) Goleman's book sold millions of copies worldwide."
    ],
    correctAnswer: 1,
    explanation: "If EQ overlaps with personality and doesn't predict beyond IQ, it undermines Goleman's claim that EQ is distinctly more important than IQ (B)."
  },
  {
    id: 13,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `When Marie Curie began her doctoral research in Paris in the 1890s, she chose to investigate a curious phenomenon recently discovered by Henri Becquerel: certain uranium compounds emitted rays that could fog a photographic plate. Curie hypothesized that this \"radioactivity\" — a term she coined — was an atomic property rather than a chemical one. Through painstaking experimentation, she and her husband Pierre isolated two new elements, polonium and radium, from tons of pitchblende ore. Her work earned her two Nobel Prizes and fundamentally altered our understanding of the atom, though the health consequences of prolonged radiation exposure would only become apparent years later.`,
    question: "The passage suggests that Curie's hypothesis about radioactivity was significant because it:",
    choices: [
      "A) proved that Becquerel's earlier discovery was incorrect.",
      "B) shifted the understanding of radioactivity from a chemical to an atomic phenomenon.",
      "C) led directly to the development of nuclear weapons.",
      "D) was the first scientific hypothesis ever tested by a woman."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"radioactivity","definition":"the emission of ionizing radiation by unstable atomic nuclei"},{"word":"pitchblende","definition":"a mineral that is the main ore of uranium"}],
    explanation: "Curie hypothesized radioactivity was 'an atomic property rather than a chemical one,' which was a fundamental shift in understanding (B)."
  },
  {
    id: 14,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `When Marie Curie began her doctoral research in Paris in the 1890s, she chose to investigate a curious phenomenon recently discovered by Henri Becquerel: certain uranium compounds emitted rays that could fog a photographic plate. Curie hypothesized that this \"radioactivity\" — a term she coined — was an atomic property rather than a chemical one. Through painstaking experimentation, she and her husband Pierre isolated two new elements, polonium and radium, from tons of pitchblende ore. Her work earned her two Nobel Prizes and fundamentally altered our understanding of the atom, though the health consequences of prolonged radiation exposure would only become apparent years later.`,
    question: "The final clause of the passage ('though the health consequences...') serves to:",
    choices: [
      "A) diminish the importance of Curie's scientific achievements.",
      "B) suggest that Curie was reckless in her research methods.",
      "C) add an ironic or poignant dimension to her accomplishments.",
      "D) argue that radiation research should have been banned."
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"painstaking","definition":"done with or employing great care and thoroughness"}],
    explanation: "The clause adds poignancy by noting that the very phenomenon Curie studied ultimately harmed her health — ironic given her groundbreaking success (C)."
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
      "B) what their content distribution systems prioritize.",
      "C) the political leanings of their journalists.",
      "D) how much they charge for subscriptions."
    ],
    correctAnswer: 1,
    explanation: "The key contrast is that social media algorithms 'prioritize engagement over accuracy' unlike traditional outlets, a difference in content distribution priorities (B)."
  },
  {
    id: 17,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `Deep in the Mariana Trench, nearly 11 kilometers below the ocean's surface, scientists have discovered thriving communities of microorganisms. These extremophiles survive in conditions of crushing pressure, near-freezing temperatures, and complete darkness. They derive energy not from sunlight, as most life on Earth does, but from chemical reactions involving hydrogen and sulfur compounds seeping from the ocean floor. The discovery of these organisms has profound implications for the search for extraterrestrial life, suggesting that life could exist on other planets or moons where conditions were previously deemed too harsh — such as beneath the icy surface of Jupiter's moon Europa.`,
    question: "The author mentions Europa primarily to:",
    choices: [
      "A) argue that life definitely exists on Jupiter's moons.",
      "B) provide an example of where extremophile-like life might be found beyond Earth.",
      "C) compare the Mariana Trench to conditions on Jupiter.",
      "D) suggest that NASA should prioritize missions to Europa."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"extremophiles","definition":"organisms that thrive in physically or chemically extreme conditions"},{"word":"extraterrestrial","definition":"of or from outside the earth or its atmosphere"}],
    explanation: "Europa is mentioned as an example of a place where life 'could exist' given what we've learned from deep-sea extremophiles (B)."
  },
  {
    id: 18,
    category: "Information and Ideas",
    difficulty: "Easy",
    passage: `Deep in the Mariana Trench, nearly 11 kilometers below the ocean's surface, scientists have discovered thriving communities of microorganisms. These extremophiles survive in conditions of crushing pressure, near-freezing temperatures, and complete darkness. They derive energy not from sunlight, as most life on Earth does, but from chemical reactions involving hydrogen and sulfur compounds seeping from the ocean floor. The discovery of these organisms has profound implications for the search for extraterrestrial life, suggesting that life could exist on other planets or moons where conditions were previously deemed too harsh — such as beneath the icy surface of Jupiter's moon Europa.`,
    question: "According to the passage, extremophiles differ from most life on Earth in that they:",
    choices: [
      "A) can survive in sunlight.",
      "B) require oxygen to survive.",
      "C) obtain energy from chemical reactions rather than sunlight.",
      "D) live in warm, shallow waters."
    ],
    correctAnswer: 2,
    explanation: "The passage states they 'derive energy not from sunlight... but from chemical reactions,' which is what sets them apart (C)."
  },
  {
    id: 19,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `The practice of \"redlining\" — in which banks and insurance companies refused services to residents of predominantly Black neighborhoods — was officially outlawed by the Fair Housing Act of 1968. However, its effects persist today. Studies show that formerly redlined neighborhoods continue to have lower property values, fewer trees, higher temperatures, and worse health outcomes than nearby non-redlined areas. These disparities are not coincidental; decades of disinvestment created a cycle of poverty and environmental degradation that has proven extremely difficult to reverse. Understanding redlining's legacy is essential for addressing the racial wealth gap that remains one of America's most persistent inequalities.`,
    question: "The author would most likely agree with which of the following statements?",
    choices: [
      "A) The Fair Housing Act successfully eliminated the effects of redlining.",
      "B) The current racial wealth gap is partially rooted in historical housing discrimination.",
      "C) Property values in formerly redlined areas have fully recovered since 1968.",
      "D) Environmental conditions play no role in economic inequality."
    ],
    correctAnswer: 1,
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
      "B) the withdrawal or withholding of financial resources",
      "C) private charitable donations",
      "D) foreign investment in domestic markets"
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"disinvestment","definition":"the withdrawal or withholding of financial resources"},{"word":"disparities","definition":"great differences or inequalities"}],
    explanation: "'Disinvestment' refers to the withdrawal of investment. In context, redlined neighborhoods were denied financial services, meaning resources were withheld (B)."
  },
  {
    id: 21,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `A growing body of research suggests that bilingualism provides cognitive benefits beyond the ability to speak two languages. Bilingual individuals often outperform monolinguals on tasks requiring attention control, cognitive flexibility, and conflict resolution. Some studies suggest that managing two language systems strengthens executive function — the brain's ability to plan, focus, and juggle multiple tasks. Perhaps most intriguing, research indicates that bilingualism may delay the onset of dementia by several years. However, critics note that many of these studies suffer from methodological limitations, including small sample sizes and difficulty controlling for socioeconomic factors.`,
    question: "The passage presents bilingualism research as:",
    choices: [
      "A) conclusive and universally accepted.",
      "B) promising but subject to valid methodological concerns.",
      "C) entirely discredited by recent findings.",
      "D) relevant only to elderly populations."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"cognitive flexibility","definition":"the mental ability to switch between thinking about different concepts"},{"word":"dementia","definition":"a chronic condition of deteriorating mental processes"}],
    explanation: "The passage describes cognitive benefits ('promising') but notes 'methodological limitations' from critics, making B the most accurate characterization."
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
      "A) completely solves the problem of unhealthy eating in those areas.",
      "B) has been shown to have limited impact on residents' actual diets.",
      "C) is too expensive to be a practical solution.",
      "D) is opposed by most food policy researchers."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"food literacy","definition":"the understanding of the impact of food choices on health and environment"}],
    explanation: "The passage states that studies 'found little change in residents' dietary habits' when new supermarkets were introduced (B)."
  },
  {
    id: 24,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `In recent years, the concept of \"food deserts\" — urban areas where residents lack access to affordable, nutritious food — has gained widespread attention. However, some researchers argue that the term oversimplifies the problem. Access to a grocery store does not guarantee healthy eating; factors such as food literacy, cooking skills, time constraints, and cultural preferences also play significant roles. Moreover, studies that introduced new supermarkets into food deserts found little change in residents' dietary habits. This has led some scholars to prefer the term \"food apartheid,\" which emphasizes the systemic racism and economic inequality that shape food access rather than simply the geographic availability of stores.`,
    question: "The term 'food apartheid' is preferred by some scholars because it:",
    choices: [
      "A) sounds more alarming and attracts media attention.",
      "B) highlights systemic social factors rather than just physical proximity to stores.",
      "C) is a more scientifically precise measurement of food access.",
      "D) was coined by residents of affected communities."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"apartheid","definition":"a system of institutionalized racial segregation and discrimination"}],
    explanation: "The passage says 'food apartheid' emphasizes 'systemic racism and economic inequality' rather than 'geographic availability,' making B correct."
  },
  {
    id: 25,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `The rise of artificial intelligence in healthcare has generated both excitement and apprehension. AI systems can now analyze medical images with accuracy rivaling that of experienced radiologists, identify potential drug interactions, and predict patient outcomes. Proponents see AI as a tool that could reduce diagnostic errors, which account for an estimated 10% of patient deaths, and make expert-level care more accessible. Skeptics, however, worry about algorithmic bias — if AI systems are trained on data that underrepresents certain populations, they may perform poorly for those groups. Additionally, questions remain about liability when an AI system makes an error that harms a patient.`,
    question: "Which of the following best describes the author's approach to the topic?",
    choices: [
      "A) Enthusiastically advocating for immediate AI adoption in all hospitals.",
      "B) Presenting both potential benefits and legitimate concerns about AI in healthcare.",
      "C) Arguing that AI should never be used in medical decision-making.",
      "D) Comparing AI performance across different medical specialties."
    ],
    correctAnswer: 1,
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
      "B) training data that does not adequately represent all patient populations.",
      "C) radiologists refusing to adopt new technology.",
      "D) patients not trusting computer-generated diagnoses."
    ],
    correctAnswer: 1,
    explanation: "The passage states bias occurs 'if AI systems are trained on data that underrepresents certain populations' (B)."
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
      "A) all cultures share the same definition of beauty.",
      "B) Western and Japanese aesthetics are fundamentally incompatible.",
      "C) ideas about beauty are shaped by culture and can change over time.",
      "D) wabi-sabi will eventually replace Western aesthetic standards."
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"aesthetic","definition":"concerned with beauty or the appreciation of beauty"},{"word":"transient","definition":"lasting only for a short time; not permanent"}],
    explanation: "The final sentence says aesthetic values are 'culturally constructed and constantly evolving,' meaning they are shaped by culture and changeable (C)."
  },
  {
    id: 29,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `Sleep deprivation has emerged as a significant public health concern. The Centers for Disease Control and Prevention estimates that one-third of American adults regularly get less than the recommended seven hours of sleep per night. The consequences extend far beyond daytime drowsiness: chronic sleep deprivation is linked to increased risks of obesity, diabetes, cardiovascular disease, and depression. Economic impacts are substantial as well, with sleep-deprived workers costing the U.S. economy an estimated $411 billion annually in lost productivity. Despite these well-documented risks, cultural attitudes that celebrate overwork and view sleep as laziness persist, particularly in professional settings.`,
    question: "The author mentions the $411 billion figure primarily to:",
    choices: [
      "A) suggest that sleep deprivation is only an economic problem.",
      "B) quantify the broader societal impact of insufficient sleep.",
      "C) argue that workers should be paid more to compensate for lost sleep.",
      "D) compare the U.S. economy with other countries' productivity."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"cardiovascular","definition":"relating to the heart and blood vessels"}],
    explanation: "The economic figure adds another dimension to the impact of sleep deprivation, quantifying the societal cost beyond health effects (B)."
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
      "C) cultural attitudes that undervalue sleep.",
      "D) disagreement among doctors about how much sleep is needed."
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"chronic","definition":"persisting for a long time or constantly recurring"}],
    explanation: "The final sentence identifies 'cultural attitudes that celebrate overwork and view sleep as laziness' as a persisting barrier (C)."
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
      "B) dated",
      "C) dating",
      "D) date"
    ],
    correctAnswer: 1,
    explanation: "The relative clause 'which ______ from the late Bronze Age' needs a past tense verb to match the past tense narrative. 'Dated' (B) is correct."
  },
  {
    id: 32,
    category: "Standard English Conventions",
    difficulty: "Easy",
    passage: `The city council approved a new ordinance requiring all commercial buildings to install solar panels by 2030. _______ the mayor praised the initiative as a bold step toward carbon neutrality, several business owners expressed concern about the financial burden.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) While",
      "B) Since",
      "C) Because",
      "D) Unless"
    ],
    correctAnswer: 0,
    explanation: "'While' (A) correctly establishes a contrast between the mayor's praise and the business owners' concerns. 'Since' and 'Because' imply causation, and 'Unless' implies a condition — none of which fits the contrast here."
  },
  {
    id: 33,
    category: "Standard English Conventions",
    difficulty: "Easy",
    passage: `Renowned for _______ innovative use of color and light, the Impressionist painters of the late 19th century challenged the academic traditions that had dominated European art for centuries.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) they're",
      "B) there",
      "C) their",
      "D) its"
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"Impressionist","definition":"relating to a 19th-century art movement emphasizing light and color"}],
    explanation: "'Their' (C) is the correct possessive pronoun referring to 'the Impressionist painters' (plural). 'They're' means 'they are,' 'there' is a location word, and 'its' is singular."
  },
  {
    id: 34,
    category: "Standard English Conventions",
    difficulty: "Medium",
    passage: `The research team submitted its findings to the peer-reviewed _______ the results were published within three months, generating significant interest from the scientific community.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) journal, and",
      "B) journal and",
      "C) journal; and",
      "D) journal"
    ],
    correctAnswer: 0,
    explanation: "Two independent clauses joined by a coordinating conjunction ('and') require a comma before the conjunction. 'Journal, and' (A) is correct."
  },
  {
    id: 35,
    category: "Standard English Conventions",
    difficulty: "Medium",
    passage: `Neither the professor nor her graduate students _______ able to replicate the results of the controversial study, casting doubt on the original researchers' methodology.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) was",
      "B) were",
      "C) is",
      "D) has been"
    ],
    correctAnswer: 1,
    explanation: "With 'neither...nor,' the verb agrees with the nearer subject. 'Her graduate students' is plural and nearest, so 'were' (B) is correct. The past tense also matches the context."
  },
  {
    id: 36,
    category: "Standard English Conventions",
    difficulty: "Medium",
    passage: `The novelist's latest _______ which spans three generations of an immigrant family, has been praised by critics for its nuanced portrayal of cultural identity and the immigrant experience in America.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) work which",
      "B) work, which",
      "C) work—which",
      "D) work; which"
    ],
    correctAnswer: 1,
    explanation: "A nonrestrictive (nonessential) relative clause must be set off by commas. 'Work, which' (B) correctly uses a comma before the relative clause. A semicolon cannot introduce a dependent clause."
  },
  {
    id: 37,
    category: "Standard English Conventions",
    difficulty: "Easy",
    passage: `By the time the emergency responders arrived at the _______ the floodwaters had already receded, leaving behind a thick layer of mud and debris.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) scene:",
      "B) scene;",
      "C) scene,",
      "D) scene"
    ],
    correctAnswer: 2,
    explanation: "A comma (C) is needed after 'scene' to complete the introductory clause 'By the time the emergency responders arrived at the scene.' A colon or semicolon would be incorrect here."
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
      "A) competition.",
      "B) competition,",
      "C) competition;",
      "D) competition"
    ],
    correctAnswer: 1,
    explanation: "The phrase 'exhausted after 26 miles of grueling competition' is a parenthetical appositive set off by commas. The opening comma appears after 'runner,' so a closing comma (B) is needed after 'competition.'"
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
      "A) For example,",
      "B) However,",
      "C) Similarly,",
      "D) In other words,"
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"coral bleaching","definition":"the whitening of coral due to stress from temperature changes"}],
    explanation: "'However' (B) signals a contrast between the ecological importance of reefs and their vulnerability. The first sentence highlights their value; the second introduces a threat."
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
      "C) This is because while",
      "D) For instance,"
    ],
    correctAnswer: 2,
    explanation: "'This is because while' (C) introduces a causal explanation with a built-in contrast — explaining why handwriting outperforms typing by contrasting the two methods."
  },
  {
    id: 43,
    category: "Transitions",
    difficulty: "Medium",
    passage: `Astronomers initially believed that the universe's expansion was slowing down due to gravitational attraction between galaxies. _______ observations of distant supernovae in the late 1990s revealed that the expansion is actually accelerating, a discovery that led to the concept of dark energy.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) Consequently,",
      "B) Specifically,",
      "C) On the contrary,",
      "D) Likewise,"
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"supernovae","definition":"massive explosions of dying stars (plural of supernova)"}],
    explanation: "'On the contrary' (C) signals that the observations directly contradicted the initial belief — the expansion was accelerating, not slowing."
  },
  {
    id: 44,
    category: "Transitions",
    difficulty: "Easy",
    passage: `The city invested heavily in expanding its bus routes and adding dedicated bus lanes. _______ ridership on public transit increased by 18% in the first year, while single-occupancy car trips declined by nearly 10%.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) Nevertheless,",
      "B) As a result,",
      "C) Meanwhile,",
      "D) In contrast,"
    ],
    correctAnswer: 1,
    explanation: "'As a result' (B) shows that the ridership increase was a direct consequence of the city's investment in transit. The second sentence describes the outcome of the first."
  },
  {
    id: 45,
    category: "Transitions",
    difficulty: "Medium",
    passage: `Many tech companies have embraced remote work policies, citing increased employee productivity and reduced overhead costs. _______ some companies have reversed course, arguing that in-person collaboration fosters innovation and strengthens company culture.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) Moreover,",
      "B) Therefore,",
      "C) Accordingly,",
      "D) Yet"
    ],
    correctAnswer: 3,
    explanation: "'Yet' (D) introduces a contrast — while many embrace remote work, some companies have moved in the opposite direction. 'Moreover' would add to the point; 'Therefore' and 'Accordingly' imply consequence."
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
      "B) Emerging from New Orleans in the early 1900s, jazz fused African and European musical traditions to become a defining form of African American cultural expression.",
      "C) African rhythmic traditions and European harmonic structures are very different from each other.",
      "D) New Orleans is a city known for many things, including jazz music, which started there."
    ],
    correctAnswer: 1,
    explanation: "Choice B mentions the geographic origin (New Orleans), the time period, the musical blend, and cultural significance — fulfilling both parts of the student's goal."
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
      "A) Solar panels are becoming cheaper, with costs dropping 89% since 2010, making solar energy more accessible to homeowners.",
      "B) While solar panels offer emission-free energy at rapidly declining costs, their dependence on weather conditions and the high cost of energy storage present significant challenges.",
      "C) Solar energy is one of many forms of renewable energy that are growing in popularity around the world.",
      "D) Energy storage technology needs to improve before solar power can fully replace fossil fuels."
    ],
    correctAnswer: 1,
    explanation: "Choice B directly contrasts the advantages (emission-free, declining costs) with the disadvantages (weather dependence, storage costs), matching the student's goal of comparing both sides."
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
      "B) 90% of the world's languages are spoken by fewer than 100,000 people.",
      "C) Minority languages disappear at 2 per month in monolingual policy regions versus 0.5 per month in multilingual policy regions.",
      "D) Language extinction is a global phenomenon affecting all regions equally."
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"endangered","definition":"at serious risk of extinction or disappearing"}],
    explanation: "Choice C directly compares language disappearance rates under different policies (2/month vs. 0.5/month), directly supporting the claim that policy affects language survival."
  },
  {
    id: 51,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `Researchers tracked the reading habits and academic performance of 1,200 middle school students over two years. Students who read for pleasure at least 20 minutes daily scored an average of 15 percentile points higher on standardized reading tests than non-readers. Interestingly, the type of material read — fiction, nonfiction, graphic novels, or online articles — did not significantly affect the results. Students who read between 5-19 minutes daily saw a smaller but still meaningful improvement of 7 percentile points.`,
    question: "Based on the passage, which of the following conclusions is best supported by the data?",
    choices: [
      "A) Fiction is more effective than nonfiction for improving reading scores.",
      "B) The amount of time spent reading matters more than the type of material read.",
      "C) Only students who read for 20 or more minutes daily see any improvement.",
      "D) Graphic novels are an underutilized resource in schools."
    ],
    correctAnswer: 1,
    explanation: "The passage states the type of material 'did not significantly affect the results' but that reading duration did (20+ min = 15 points, 5-19 min = 7 points), supporting B."
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
      "B) Whether genetics plays any role in creative ability.",
      "C) Whether the fundamental capacity for creativity can be substantially developed.",
      "D) Whether brain imaging is a reliable research tool."
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"divergent","definition":"tending to develop in different directions; differing from each other"}],
    explanation: "Vasquez says creative capacity is 'determined at birth'; Liu shows training can 'significantly increase creative output' with measurable brain changes. They disagree on whether creativity can be substantially developed (C)."
  },
  {
    id: 54,
    category: "Expression of Ideas",
    difficulty: "Hard",
    passage: `Text 1: Urban planner Sarah Kim advocates for mixed-use zoning, where residential, commercial, and office spaces coexist in the same neighborhoods. She argues this approach reduces commute times, supports local businesses, and creates vibrant communities where people can live, work, and shop within walking distance.\n\nText 2: Community activist Robert Torres has observed that mixed-use development in his neighborhood led to rapidly increasing property values and rents. Long-time residents and small business owners have been displaced by luxury apartments and upscale retailers. Torres argues that without strong affordable housing protections, mixed-use zoning primarily benefits developers and wealthy newcomers.`,
    question: "Which choice best describes the relationship between the two texts?",
    choices: [
      "A) Text 2 provides evidence that directly refutes the claims made in Text 1.",
      "B) Text 2 presents a real-world complication that Text 1's argument does not address.",
      "C) Text 2 agrees with Text 1's main point but offers additional supporting evidence.",
      "D) Text 2 discusses an entirely unrelated topic."
    ],
    correctAnswer: 1,
    explanation: "Kim advocates for mixed-use zoning's benefits, while Torres identifies a real consequence (displacement/gentrification) that Kim's argument overlooks. Text 2 complicates but doesn't entirely refute Text 1 (B)."
  },

  // ========== INFERENCE & LITERARY ANALYSIS ==========
  {
    id: 55,
    category: "Information and Ideas",
    difficulty: "Medium",
    passage: `The morning light crept through the shutters like an unwanted guest. Elena stared at the empty chair across the breakfast table, its cushion still bearing the impression of someone who had sat there for thirty years. She poured two cups of coffee out of habit, then stood motionless, watching the steam rise from the second cup until it went cold.`,
    question: "What can most reasonably be inferred about Elena's situation?",
    choices: [
      "A) She is angry at someone who has left her.",
      "B) She is grieving the recent loss or departure of a longtime companion.",
      "C) She is expecting a visitor who is running late.",
      "D) She dislikes mornings and prefers to sleep in."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"poignant","definition":"evoking a keen sense of sadness or regret"}],
    explanation: "The empty chair with a 30-year impression, the habitual second cup of coffee, and watching it go cold all suggest she is grieving someone who is no longer there (B). The tone is melancholic, not angry."
  },
  {
    id: 56,
    category: "Craft and Structure",
    difficulty: "Hard",
    passage: `The governor's speech was a masterwork of political calculation. She praised the opposition's dedication to public service in one breath and questioned their competence in the next. She invoked the struggles of working families while standing in a ballroom that cost $500 a plate to enter. Every word was chosen not for its truth but for its effect, each sentence a carefully constructed bridge between what the audience wanted to hear and what the governor wanted them to believe.`,
    question: "The author's tone toward the governor is best described as:",
    choices: [
      "A) admiring and supportive.",
      "B) indifferent and detached.",
      "C) critical and ironic.",
      "D) confused and uncertain."
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"irreverent","definition":"showing a lack of respect for things normally treated with seriousness"}],
    explanation: "The author highlights contradictions (praising then questioning opponents, invoking working families in a $500/plate ballroom) and describes words chosen 'not for truth but for effect' — clearly critical and ironic (C)."
  },
  {
    id: 57,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `Dr. Yuki Tanaka's research on microplastics in Arctic ice cores revealed concentrations far higher than any previous model had predicted. When she presented her findings at the international climate conference, the audience fell silent. Several senior researchers who had spent decades building the prevailing models shifted uncomfortably in their seats. One later described the moment as \"the sound of a paradigm cracking.\"`,
    question: "The quote 'the sound of a paradigm cracking' most nearly suggests that:",
    choices: [
      "A) the conference room had poor acoustics.",
      "B) Dr. Tanaka's findings challenged the fundamental assumptions of the established scientific framework.",
      "C) the senior researchers were hostile to new ideas from younger scientists.",
      "D) the prevailing models had always been considered unreliable."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"paradigm","definition":"a typical example, pattern, or model of something; a worldview"}],
    explanation: "A 'paradigm cracking' metaphorically refers to the established scientific framework being fundamentally challenged. The silence and discomfort confirm the findings disrupted existing models (B)."
  },
  {
    id: 58,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `In a 2023 experiment, researchers gave two groups of participants the same wine to taste. One group was told the wine cost $10 per bottle; the other was told it cost $90. Brain scans revealed that the \"$90 group\" showed significantly more activity in the medial orbitofrontal cortex, a region associated with pleasure. Participants in this group also rated the wine as tasting substantially better. The wine was, in both cases, a $12 bottle of Cabernet Sauvignon.`,
    question: "The experiment most directly supports which of the following claims?",
    choices: [
      "A) Expensive wines are produced using objectively superior methods.",
      "B) People cannot distinguish between cheap and expensive wines.",
      "C) Price expectations can alter the actual subjective experience of taste.",
      "D) Brain scans are unreliable measures of sensory experience."
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"orbitofrontal cortex","definition":"a brain region involved in decision-making and reward processing"}],
    explanation: "The brain scans showed real differences in pleasure response based solely on price expectation, and taste ratings differed too. This shows price expectations changed the actual subjective experience (C), not just the report."
  },
  {
    id: 59,
    category: "Craft and Structure",
    difficulty: "Hard",
    passage: `The company's annual report described the layoffs as a \"strategic realignment of human capital resources\" and the factory closure as an \"optimization of our geographic footprint.\" Nowhere in the 47-page document did the words \"job loss,\" \"unemployment,\" or \"community impact\" appear. The CEO's letter opened with the phrase \"an exciting year of transformation.\"`,
    question: "The author most likely includes specific quotes from the report in order to:",
    choices: [
      "A) praise the company's transparent communication with stakeholders.",
      "B) highlight how corporate language can obscure negative realities.",
      "C) explain the business reasons behind the company's decisions.",
      "D) demonstrate the CEO's enthusiasm for the company's future."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"euphemism","definition":"a mild or indirect word substituted for one considered too harsh"}],
    explanation: "By juxtaposing euphemistic language ('strategic realignment,' 'optimization') with what was conspicuously absent ('job loss,' 'unemployment'), the author exposes how corporate language disguises harsh realities (B)."
  },
  {
    id: 60,
    category: "Expression of Ideas",
    difficulty: "Medium",
    passage: `When the town council proposed building a new highway through the historic Millbrook district, residents organized a fierce opposition campaign. They cited the neighborhood's 200-year-old buildings, its role in the civil rights movement, and its status as the cultural heart of the community. The council countered with traffic studies projecting a 40% reduction in commute times and an economic analysis showing $50 million in regional economic benefits. After months of debate, the council voted 4-3 to approve the project, with the dissenting members calling it \"progress that erases history.\"`,
    question: "The phrase 'progress that erases history' primarily conveys:",
    choices: [
      "A) support for modernizing the town's infrastructure.",
      "B) the tension between economic development and cultural preservation.",
      "C) a belief that all new construction is harmful.",
      "D) indifference toward the community's concerns."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"polarization","definition":"division into two sharply contrasting groups or opinions"}],
    explanation: "The phrase acknowledges the project as 'progress' (economic benefit) while condemning it for 'erasing history' (cultural loss), perfectly capturing the tension between development and preservation (B)."
  },

  // ========== HARD QUESTIONS ==========
  {
    id: 61,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `Economist Thomas Sowell has argued that cultural values, not systemic barriers, primarily explain disparities in economic outcomes among different groups. He points to immigrant communities that arrived with little wealth yet achieved economic success within a generation, suggesting that habits of thrift, education, and entrepreneurship were decisive. Sociologist William Julius Wilson, however, contends that structural factors — deindustrialization, residential segregation, and the disappearance of living-wage jobs from inner cities — created concentrated poverty that no amount of individual effort could overcome. Wilson does not deny the importance of cultural values but argues they are themselves shaped by structural conditions.`,
    question: "Wilson's position differs from Sowell's most fundamentally in that Wilson:",
    choices: [
      "A) denies that cultural values play any role in economic outcomes.",
      "B) believes immigrant success stories are fabricated or exaggerated.",
      "C) views cultural values as effects of structural conditions rather than independent causes.",
      "D) argues that all groups face identical structural barriers."
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"deindustrialization","definition":"the decline of industrial activity in a region or economy"},{"word":"systemic","definition":"relating to or affecting an entire system rather than individual parts"}],
    explanation: "Wilson 'does not deny the importance of cultural values but argues they are themselves shaped by structural conditions.' This means he sees culture as an effect, not an independent cause — making C correct. A is wrong because Wilson doesn't deny culture's role entirely."
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
      "A) Europe, was",
      "B) Europe was",
      "C) Europe; was",
      "D) Europe. Was"
    ],
    correctAnswer: 0,
    explanation: "The clause 'who had studied under three of the most celebrated maestros in Europe' is a nonrestrictive relative clause that interrupts the main sentence. It must be closed with a comma before the main verb 'was.' Choice A correctly provides this comma."
  },
  {
    id: 64,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `A 2024 study examined whether exposure to nature documentaries could increase pro-environmental behavior. Participants who watched a 30-minute nature film subsequently donated 23% more to conservation charities than a control group. However, when researchers followed up six months later, the effect had disappeared entirely — both groups showed identical donation patterns. A separate study found that participants who spent 30 minutes walking in an actual forest donated 19% more than controls, and this effect persisted at the six-month follow-up.`,
    question: "Taken together, the two studies most strongly suggest that:",
    choices: [
      "A) nature documentaries are more effective than direct nature exposure at changing behavior.",
      "B) lasting behavioral change requires direct sensory experience rather than mediated representation.",
      "C) people who watch nature documentaries are less generous than those who walk in forests.",
      "D) the control groups in both studies were not properly constructed."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"pro-environmental","definition":"supporting or promoting the protection of the natural environment"}],
    explanation: "Documentaries caused a short-term effect that vanished; direct forest exposure caused a smaller but persistent effect. The key distinction is mediated vs. direct experience, and only direct experience produced lasting change (B). A is wrong because documentaries had a larger initial but non-lasting effect."
  },
  {
    id: 65,
    category: "Transitions",
    difficulty: "Hard",
    passage: `The prevailing theory held that the extinction of megafauna in Australia approximately 46,000 years ago was caused by climate change. _______ recent isotope analysis of fossilized teeth reveals that the animals' diets remained consistent until their sudden disappearance, suggesting their food sources were stable — a finding difficult to reconcile with the climate hypothesis.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "A) In support of this theory,",
      "B) As a result,",
      "C) In addition,",
      "D) However,"
    ],
    correctAnswer: 3,
    vocabWords: [{"word":"megafauna","definition":"large animals, especially those of a particular region or period"},{"word":"isotope","definition":"variants of a chemical element with different numbers of neutrons"}],
    explanation: "'However' (D) is correct because the isotope findings contradict the climate change theory — if food sources were stable, climate wasn't destroying their habitat. This is tricky because students might think 'In addition' works, but the second sentence actively undermines the first."
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
      "B) illustrate a discrepancy between what the company knew privately and what it reported publicly.",
      "C) argue that all pharmaceutical research should be made public immediately.",
      "D) explain why cardiac events are difficult to detect in clinical trials."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"juxtaposition","definition":"the act of placing two things side by side for comparison or contrast"}],
    explanation: "The passage places private knowledge (cardiac events found in 2019) next to public claims ('no clinically significant adverse events') — a clear discrepancy between what was known and what was reported (B)."
  },
  {
    id: 68,
    category: "Standard English Conventions",
    difficulty: "Hard",
    passage: `The discovery that octopuses can edit their own RNA — altering the genetic instructions after they have been copied from DNA — _______ conventional understanding of how organisms adapt to their environments.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "A) challenge",
      "B) challenges",
      "C) have challenged",
      "D) are challenging"
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"RNA","definition":"ribonucleic acid, a molecule essential for gene expression and protein synthesis"}],
    explanation: "The subject is 'The discovery' (singular), not 'octopuses.' The long interrupting clause between dashes makes it easy to lose track of the subject. 'Challenges' (B) is the singular present tense verb that agrees with 'discovery.'"
  },
  {
    id: 69,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `Researchers studying decision fatigue found that judges granted parole in approximately 65% of cases heard at the beginning of the day but in fewer than 10% of cases heard just before a break. After a food break, approval rates jumped back to 65% before declining again. Some scholars interpreted this as evidence that mental fatigue causes harsher decisions. However, a 2023 reanalysis found that case ordering was not random — attorneys for prisoners with stronger cases strategically scheduled hearings for early morning slots. When the researchers controlled for case strength, the decision fatigue effect was reduced by 80%.`,
    question: "The 2023 reanalysis most directly undermines the original interpretation by suggesting that:",
    choices: [
      "A) judges are never affected by fatigue when making decisions.",
      "B) the correlation between timing and parole rates was largely explained by a confounding variable.",
      "C) attorneys should not be allowed to choose hearing times.",
      "D) food breaks have no effect on judicial decision-making."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"confounding variable","definition":"an unmeasured variable that influences both the independent and dependent variables, creating a false association"}],
    explanation: "The reanalysis found that case strength (a confounding variable), not fatigue, explained most of the timing effect. The effect was 'reduced by 80%' when controlling for this variable — making B correct. A is too absolute (the effect was reduced, not eliminated)."
  },
  {
    id: 70,
    category: "Expression of Ideas",
    difficulty: "Hard",
    passage: `Text 1: Literary critic Harold Bloom argued that great literature should be valued purely for its aesthetic qualities — the beauty of its language, the depth of its characters, the universality of its themes. He warned that reading literature through political or ideological lenses diminishes its artistic power and reduces complex works to mere propaganda.\n\nText 2: Critic bell hooks countered that the separation of aesthetics from politics is itself a political act. By declaring certain works \"universal,\" Bloom privileged perspectives that reflected his own identity while marginalizing others. hooks argued that examining who gets to define \"great literature\" and whose stories are excluded is not a threat to aesthetics but a necessary expansion of what literature can be.`,
    question: "hooks would most likely argue that Bloom's concept of 'universality' in literature is problematic because it:",
    choices: [
      "A) ignores the technical craft involved in writing fiction.",
      "B) presents one particular cultural perspective as though it were the default human experience.",
      "C) encourages readers to analyze literature from too many different angles.",
      "D) values older literary works over contemporary ones."
    ],
    correctAnswer: 1,
    explanation: "hooks says Bloom 'privileged perspectives that reflected his own identity while marginalizing others' when declaring works 'universal.' This means his 'universality' actually masks a particular perspective presented as default (B). A is wrong because hooks doesn't discuss craft, and C is the opposite of her argument."
  },
  {
    id: 71,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `A longitudinal study tracking 5,000 children found that those who received music education for at least two years scored, on average, 12 percentile points higher on standardized math tests than those who did not. Proponents of music education cited the study as evidence that music training enhances mathematical reasoning. However, critics noted that the study did not randomly assign children to music education — parents who enrolled their children in music lessons tended to have higher incomes, more education, and were more likely to provide additional academic enrichment activities. A subsequent randomized controlled trial with 800 students found a statistically insignificant 2-point difference.`,
    question: "The randomized controlled trial is significant in this context because it:",
    choices: [
      "A) proves that music education has no academic value whatsoever.",
      "B) confirms that parental income is the sole determinant of academic success.",
      "C) helps isolate whether music itself drives the effect by eliminating selection bias.",
      "D) demonstrates that the original study had too few participants."
    ],
    correctAnswer: 2,
    vocabWords: [{"word":"longitudinal","definition":"a study that follows the same subjects over an extended period"},{"word":"selection bias","definition":"error introduced when study participants are not representative of the intended population"}],
    explanation: "The original study's flaw was selection bias (parents who choose music lessons differ from those who don't). The RCT randomly assigns students, eliminating this bias. The near-zero result suggests the original effect was due to family characteristics, not music itself (C). A is too absolute."
  },
  {
    id: 72,
    category: "Craft and Structure",
    difficulty: "Hard",
    passage: `When the committee released its 800-page report on the financial crisis, the chairman declared it a \"comprehensive, bipartisan investigation.\" Of the committee's ten members, the four who dissented issued a 95-page minority report arguing that the majority had ignored evidence of government policy failures in order to focus exclusively on private sector misconduct. The majority's report was widely covered in national media; the minority report received significantly less attention. Subsequent academic analyses have cited evidence and arguments from both reports, with several scholars noting that neither report alone provided a complete picture.`,
    question: "The passage most strongly implies that:",
    choices: [
      "A) the minority report was more accurate than the majority report.",
      "B) the chairman's description of the report as 'comprehensive' may have been overstated.",
      "C) media coverage of the crisis was deliberately biased against the minority.",
      "D) academic scholars should not rely on government reports for research."
    ],
    correctAnswer: 1,
    explanation: "The chairman called it 'comprehensive,' but 4 of 10 members dissented saying evidence was ignored, and scholars note 'neither report alone provided a complete picture.' This implies the majority report was not as comprehensive as claimed (B). A goes too far — the passage doesn't say which was more accurate. C is unsupported."
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
      "C) AI development faces a fundamental paradox: the better an AI system becomes at achieving its stated objective, the more creative — and potentially dangerous — its methods of doing so may become, as illustrated by systems that exploit loopholes rather than learn intended behaviors.",
      "D) Researchers should be more careful when specifying objectives for AI systems to prevent unintended consequences."
    ],
    correctAnswer: 2,
    explanation: "The student wants to highlight a paradox. Only C frames the information as a paradox (more capability = more creative exploitation), uses the specific example, and connects it to the broader danger. B is too vague, D is a recommendation rather than highlighting a paradox."
  },
  {
    id: 75,
    category: "Information and Ideas",
    difficulty: "Hard",
    passage: `Historian Yuval Noah Harari has argued that Homo sapiens' ability to create and believe in shared fictions — myths, religions, nations, money, human rights — is what enabled large-scale cooperation among strangers and ultimately allowed humans to dominate the planet. Anthropologist David Graeber contested this framing, arguing that it presents domination as the natural purpose of human cooperation, when in fact many early human societies deliberately organized themselves to prevent the concentration of power. Graeber suggested that the question is not how humans learned to cooperate at scale but why some societies chose to use that cooperation for domination while others did not.`,
    question: "Graeber's response to Harari reframes the central question from one about:",
    choices: [
      "A) whether shared fictions exist to one about whether they are beneficial.",
      "B) the mechanism enabling cooperation to the choices societies made about how to use it.",
      "C) prehistoric societies to modern nation-states.",
      "D) biology to economics as the primary driver of human behavior."
    ],
    correctAnswer: 1,
    vocabWords: [{"word":"shared fictions","definition":"collectively held beliefs or constructs that enable social coordination (e.g., money, nations, laws)"}],
    explanation: "Harari asks how cooperation became possible (mechanism). Graeber shifts to why some societies used cooperation for domination while others prevented it (choices about usage). This is a reframing from mechanism to choice (B)."
  },
]

export default questions
