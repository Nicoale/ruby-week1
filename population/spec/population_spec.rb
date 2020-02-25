require './lib/population'
    describe Population do
        it 'confirms initial population 0' do
            population = Population.new
            expect(population.population_number).to eq 0
        end       
    end
    