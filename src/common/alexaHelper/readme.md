library to add promise construction to alexa.

Creates temporary structure, embeds alexa object inside of it.

Always start with alexaHelper.start(alexaInstance)

Available commands to run:
tell(messageString)
prompt(messageString) - indicates a question
reprompt(messageString) - indicates a question
setState(stateVar) - sets the alexa state

commit(options) - Commits the temporary structure to the embedded alexa instance.  Should be the final part of the chain.