
require_relative 'feature'

module Load

  def self.features
    output = {}
    filepaths = Dir[ "#{features_dirbase}/g?.*/f?.*" ]
    filepaths.sort.each do |filepath|
      group = File.basename(File.dirname(filepath))
      filename = File.basename(filepath)
      output[group] = [] if output[group].nil?
      feature = Feature.new(group, filename)
      output[group] <<  feature
    end
    output
  end

  private

  def self.features_dirbase
    dirbase = File.dirname(__FILE__)
    File.join(dirbase, '..', 'features')
  end
end
