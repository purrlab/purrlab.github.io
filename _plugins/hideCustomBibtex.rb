 module Jekyll
  module HideCustomBibtex
    def hideCustomBibtex(input)
	  keywords = @context.registers[:site].config['filtered_bibtex_keywords']

	  keywords.each do |keyword|
<<<<<<< HEAD
		input = input.gsub(/^.*#{keyword}.*$\n/, '')
=======
		input = input.gsub(/^.*\b#{keyword}\b *= *\{.*$\n/, '')
>>>>>>> b607e580adbf2b96194dce79146f8aa201016da3
	  end

      return input
    end
  end
end

Liquid::Template.register_filter(Jekyll::HideCustomBibtex)
