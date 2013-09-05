###Why this instead of yo ember:app or ember-starter-kit?

- this is a boilerplate specifically for me; so it's including zurb-foundation for sass, and some basic scaffolding.
- Because.

Clone, ```npm install``` then ```bower install``` then ```grunt server``` and go.


/src is for any source javascript file (and handlebar templates)
/styles are for all scss, compiled down to style.css.
- components
	-- _lib.scss
		-- any component file

all of the partials within /styles/components, /styles/mixins, /styles/placeholders should have a corresponding @import at in the corresponding folders _lib.scss partial. _lib.scss should also store any type-specific variables.

the _settings.scss partial will / should contain font definitions, global variables, etc.
