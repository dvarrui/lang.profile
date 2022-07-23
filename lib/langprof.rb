
require_relative 'langprof/profiler'

module Langprof
  def self.show_features
    profiler = Profiler.new
    profiler.show_features
 end
end
