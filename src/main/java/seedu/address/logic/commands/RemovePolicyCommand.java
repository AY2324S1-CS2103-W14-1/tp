package seedu.address.logic.commands;

import static java.util.Objects.requireNonNull;
import static seedu.address.model.Model.PREDICATE_SHOW_ALL_PERSONS;

import java.util.List;
import java.util.Set;

import seedu.address.commons.core.index.Index;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.model.Model;
import seedu.address.model.person.Person;
import seedu.address.model.policy.Policy;

/**
 * Deletes a policy from an existing person in the address book.
 */
public class RemovePolicyCommand extends Command {
    public static final String COMMAND_WORD = "removePolicy";

    public static final String MESSAGE_USAGE = COMMAND_WORD
            + ": Removes the policy identified by the index of " +
            "the person and the index of the policy in the person's policy set.\n"
            + "Parameters: INDEX (must be a positive integer) POLICY_INDEX (must be a positive integer)\n"
            + "Example: " + COMMAND_WORD + " 1 2";

    public static final String MESSAGE_DELETE_POLICY_SUCCESS = "Deleted policy from person: %1$s";

    private final Index targetIndex;
    private final Index policyIndex;

    /**
     * Creates a RemovePoliocyCommand to remove the specified {@code Policy}
     * from the specified {@code Person}
     */
    public RemovePolicyCommand(Index targetIndex, Index policyIndex) {
        this.targetIndex = targetIndex;
        this.policyIndex = policyIndex;
    }

    @Override
    public CommandResult execute(Model model) throws CommandException {
        requireNonNull(model);
        List<Person> lastShownList = model.getFilteredPersonList();

        if (targetIndex.getZeroBased() >= lastShownList.size()) {
            throw new CommandException("The index provided is invalid");
        }

        Person personToEdit = lastShownList.get(targetIndex.getZeroBased());

        Set<Policy> policyList = personToEdit.getPolicies();
        if (policyIndex.getZeroBased() >= policyList.size()) {
            throw new CommandException("The policy index provided is invalid");
        }

        // Convert the set to a list to get the specific policy to delete
        Policy policyToDelete = policyList.stream().skip(policyIndex.getZeroBased()).findFirst().orElse(null);
        if (policyToDelete == null) {
            throw new CommandException("The policy does not exist.");
        }

        personToEdit.removePolicy(policyToDelete);
        model.setPerson(personToEdit, personToEdit);
        model.updateFilteredPersonList(PREDICATE_SHOW_ALL_PERSONS);
        return new CommandResult(String.format(MESSAGE_DELETE_POLICY_SUCCESS, personToEdit));
    }
}
