
class Feature
  attr_reader :group, :name

  def initialize(group, name)
    @group = group
    @name = name
  end

  def to_s
    @name
  end

  def self.show(features)
    features.keys.each do |group|
      puts "[ #{group} ] #{features[group].join(', ')}"
    end
  end
end
