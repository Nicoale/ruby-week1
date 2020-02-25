# class Animal
#     def reproduction
#         "They reproduce"
#     end
#     def motion
#         "capable of motion"
#     end

# end

class CentralGovernment
    def taxes
        "well paid"
    end
    def corrects
        "well done"
    end
    def enforce_laws
        "fairly"
    end 
end

class CountyGovernment < CentralGovernment
    def enforce_laws 
        "Should only enforce county laws"
    end
end

    rules = CountyGovernment.new 
    p rules.enforce_laws



    