
require_relative 'load'

class Profiler
  attr_reader :features

  def initialize
    @features = Load.features
  end
end
