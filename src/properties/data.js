const posterInfo = [
  {
    performer: "Jada Baskerville",
    song: "How About a Dance",
    show: "Bonnie & Clyde",
    video_url: "https://d1d291px3h5re.cloudfront.net/Jada+Baskerville+++How+about+a+Dance+-++Bonnie+%26+Clyde+.mp4",
    poster_url: "https://d36la9njq88rnf.cloudfront.net/bonnieandclyde.png"
  },
  {
    performer: "Laurel Burks & Jude Jecker",
    song: "Another Day",
    show: "Rent",
    video_url: "https://d1d291px3h5re.cloudfront.net/Laurel+Burks+%26+Jake+Jecker+Another+Day+-++Rent+.mp4",
    poster_url: "https://d36la9njq88rnf.cloudfront.net/rent.png"
  },
  {
    performer: "Emery Chisholm",
    song: "Never Fall in Love with an Elf",
    show: "Elf: The Musical",
    video_url: "https://d1d291px3h5re.cloudfront.net/Emery+Chisholm++Never+Fall+in+Love+with+an+Elf+-+Elf%3A+The+Musical.mp4",
    poster_url: "https://d36la9njq88rnf.cloudfront.net/elf.png"
  },
  {
    performer: "Courtney Cooke",
    song: "So Long Dearie",
    show: "Hello Dolly",
    video_url: "https://d1d291px3h5re.cloudfront.net/Courtney+Cooke+So+Long+Dearie+-++Hello+Dolly+.mp4",
    poster_url: "https://d36la9njq88rnf.cloudfront.net/hellodolly.png"
  },
  {
    performer: "Kaylee Cox",
    song: "You’ll Be Back",
    show: "Hamilton",
    video_url: "https://d1d291px3h5re.cloudfront.net/Kaylee+Cox++You%E2%80%99ll+Be+Back+-+Hamilton+.mp4",
    poster_url: "https://d36la9njq88rnf.cloudfront.net/hamilton.png"
  },
  {
    performer: "Annabelle Crawford & Izzy Dale",
    song: "Hello Twelve, Hello Thirteen, Hello Love",
    show: "Chorus Line",
    video_url: "https://d1d291px3h5re.cloudfront.net/Annabelle+Crawford+%26+Izzy+Dale+Hello+twelve%2C+Hello+thirteen%2C+Hello+Love+-+Chorus+Line+.mp4",
    poster_url: "https://d36la9njq88rnf.cloudfront.net/chorusline.png"
  },
  {
    performer: "Ashlen Herrin, Asher Phillips, Allison Pimm, Delany Briggs, Kailia Lucero",
    song: "Disney Medley",
    show: "-",
    video_url: "https://d1d291px3h5re.cloudfront.net/Ashlen+Herrin+-+Asher+Phillips+-+Allison+Pimm+-+Delany+Briggs+-+Kailia+Lucero+Disney+medley+.mp4",
    poster_url: "https://d36la9njq88rnf.cloudfront.net/disney.png"
  },
  {
    performer: "Ali Matengula",
    song: "The Human Heart",
    show: "Once on this Island",
    video_url: "https://d1d291px3h5re.cloudfront.net/Ali+Matengula++The+Human+Heart+-+Once+on+this+Island+.mp4",
    poster_url: "https://d36la9njq88rnf.cloudfront.net/onceonthisisland.png"
  },
  {
    performer: "Zoie Mayberry",
    song: "Sympathy Tenderness",
    show: "Jekyll and Hyde",
    video_url: "https://d1d291px3h5re.cloudfront.net/Zoie+Mayberry+Sympathy+Tenderness++-+Jekyll+and+Hyde+.mp4",
    poster_url: "https://d36la9njq88rnf.cloudfront.net/jekyllandhyde.png"
  },
  {
    performer: "Jordan Schliper",
    song: "No One Else",
    show: "Natasha, Pierre & The Great Comet of 1812",
    video_url: "https://d1d291px3h5re.cloudfront.net/Jordan+Schliper+No+one+else+-+Natasha%2C+Pierre+%26+The+Great+Comet+of+1812.mp4",
    poster_url: "https://d36la9njq88rnf.cloudfront.net/greatcomet.png"
  },
  {
    performer: "Emily Root",
    song: "The Boy Next Door",
    show: "Meet Me In Saint Louis",
    video_url: "https://d1d291px3h5re.cloudfront.net/Emily+Root++The+Boy+next+Door+-+Meet+me+in+Saint+Louis+.mp4",
    poster_url: "https://d36la9njq88rnf.cloudfront.net/meetmeinstlouis.png"
  },
  {
    performer: "Jackson Urbach",
    song: "Wicked Little Town",
    show: "Hedwig",
    video_url: "https://d1d291px3h5re.cloudfront.net/Jackson+Urbach+Wicked+Little+Town+-+Hedwig+.mp4",
    poster_url: "https://d36la9njq88rnf.cloudfront.net/hedwig.png"
  },
  {
    performer: "Crystal Sin",
    song: "I Can Hear The Bells",
    show: "Hairspray",
    video_url: "https://d1d291px3h5re.cloudfront.net/Crystal+Sin+++I+can+hear+the+Bells+-+Hairspray+.mp4",
    poster_url: "https://d36la9njq88rnf.cloudfront.net/hairspray.png"
  },
  {
    performer: "Hailey Smith",
    song: "Something Wonderful",
    show: "King and I",
    video_url: "https://d1d291px3h5re.cloudfront.net/Hailey+Smith+Something+Wonderful+-+King+and+I+.mp4",
    poster_url: "https://d36la9njq88rnf.cloudfront.net/kingandi.png"
  },
  {
    performer: "Mackenzie Thornton",
    song: "Good Thing Going",
    show: "Merrily We Roll Along",
    video_url: "https://d1d291px3h5re.cloudfront.net/Mackenzie+Thornton++Good+thing+going++-+Merrily+We+Roll+Along+.mp4",
    poster_url: "https://d36la9njq88rnf.cloudfront.net/merrilywegoalong.png"
  },
  {
    performer: "Meghan Vergis",
    song: "When He Sees Me",
    show: "Waitress",
    video_url: "https://d1d291px3h5re.cloudfront.net/Meghna+Vergis+Waitress.mp4",
    poster_url: "https://d36la9njq88rnf.cloudfront.net/waitress.png"
  },
  {
    performer: "Jackson Urbach and Mackenzie Thornton",
    song: "Tango Maureen",
    show: "Rent",
    video_url: "https://d1d291px3h5re.cloudfront.net/Jackson+Urbach+%26+Mackenzie+Thornton+Tango+Maureen+-+Rent.mp4",
    poster_url: "https://d36la9njq88rnf.cloudfront.net/rent.png"
  },
  {
    performer: "Izzy Dale and Jaiden Compuesto",
    song: "Making a Home",
    show: "Falsettos",
    video_url: "https://d1d291px3h5re.cloudfront.net/Izzy+Dale+and+Jaiden+Compuesto++Making+a+Home++-+Falsettos+.mp4",
    poster_url: "https://d36la9njq88rnf.cloudfront.net/falsettos.png"
  },
  {
    performer: "Annabelle Crawford",
    song: "Pulled",
    show: "Addams Family",
    video_url: "https://d1d291px3h5re.cloudfront.net/Annabelle+Crawford+Pulled++-+Addams+Family+.mp4",
    poster_url: "https://d36la9njq88rnf.cloudfront.net/addamsfamily.png"
  }
]

export default posterInfo;