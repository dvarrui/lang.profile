
require_relative 'load'
require_relative 'feature'

class Profiler

  def initialize
    @features = Load.features
  end

  def show_features
    Feature.show(@features)
  end
end
