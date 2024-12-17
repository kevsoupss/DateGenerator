import { OpenAI } from "openai"

const API_KEY = "YOUROPENAIKEY"

const openai = new OpenAI({
    apiKey: API_KEY,
    dangerouslyAllowBrowser: true,
  });

export async function getAI(location, conditions) {
    const completion = await openai.chat.completions.create({
      model:"gpt-4o-mini",
      messages: [{

        "role": "system",
        "content": [
          {
          "type":"text",
          "text": `You are a web searcher that finds date locations and activities that are restricted to these conditions, ${conditions} 
                  ${location ? `and strictly this location: ${location}` : ""}, 
                  Please provide 6 possible activities with its name, a short description, a price, an image associated to the activity, and link to page.  
                  Provide no other commentary and provide your response in a JSON object format like this with no newline characters:

                  {
    "locations": [
        {
            "name": "Stanley Park Seawall",
            "description": "Enjoy a scenic walk, bike, or rollerblade along the world's longest uninterrupted waterfront path.",
            "cost": "$20 bike rental for 2 hours",
            "url": "https://vancouver.ca/parks-recreation-culture/stanley-park.aspx",
            "image": "image link"
        },
        {
            "name": "Queen Elizabeth Park",
            "description": "Explore the beautifully landscaped gardens and enjoy panoramic views of the city.",
            "cost": "Free entry, parking $2/hr",
            "url": "https://vancouver.ca/parks-recreation-culture/queen-elizabeth-park.aspx",
            "image": "image link"
        },
        {
            "name": "Lynn Canyon Park",
            "description": "Take a stroll through lush forest trails and visit the stunning suspension bridge.",
            "cost": "Free entry",
            "url": "https://lynncanyonpark.com/",
            "image": "image link"
        },
        {
            "name": "Kitsilano Beach",
            "description": "Relax on the beach, play volleyball, or take a swim in the ocean.",
            "cost": "Free entry, parking varies",
            "url": "https://vancouver.ca/parks-recreation-culture/kitsilano-beach-park.aspx",
            "image": "image link"
        },
        {
            "name": "VanDusen Botanical Garden",
            "description": "Explore the stunning garden with a variety of plants and water features.",
            "cost": "$10 admission",
            "url": "https://vandusengarden.org/",
            "image": "image link"
        },
        {
            "name": "Grouse Mountain Skyride",
            "description": "Take a ride up the mountain for breathtaking views of Vancouver.",
            "cost": "$30 return ticket",
            "url": "https://www.grousemountain.com/skyride",
            "image": "image link"
        }
    ]
}

                  Please return with no newline characters. Please check if url works, if not, please dont include it.
                  
                  `,
        
        }]
      }],
      logit_bias: {"1734": -100}

    })

    return completion.choices[0].message.content;
  }
      

