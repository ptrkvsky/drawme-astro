export const queryWhoAmI = `query WhoAmIPageQuery {
	WhoAmI(id: "0d857547-3aff-4843-8c96-ea4d2e6623bc") {
    titlePart1 
    titlePart2
  	intro 
    presentationRaw
    presentationMobile1Raw
    presentationMobile2Raw
    portrait{ 
    	asset{ 
      	url
        metadata{ 
        	dimensions{ 
          	width
            height
          }
        }
      }
    }
  }
}
`;
