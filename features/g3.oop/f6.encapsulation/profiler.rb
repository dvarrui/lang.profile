
class Profiler
  attr_reader :features

  def initialize
    @features = read_features || []
  end

  private

  def features_dirbase
    dirbase = File.dirname(__FILE__)
    File.join(dirbase, '..', 'features')
  end

  def read_features
    output = []
    filepaths = Dir[ "#{features_dirbase}/**/*.d" ]
    filepaths.sort.each { |filepath| output <<  File.basename(filepath) }
    output
  end
end
